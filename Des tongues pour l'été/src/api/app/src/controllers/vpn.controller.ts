import { Request, Response, NextFunction, Router } from 'express'

import * as fs from 'fs'
import * as crypto from 'crypto'

import ExpressController from '../interfaces/express.controller.interface'

import { AuthMiddleware } from '../middlewares/auth.middleware'

class VpnController implements ExpressController {
    public path = '/vpn'
    public router = Router()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/integrity`, AuthMiddleware, this.getIntegrity)
        this.router.get(`${this.path}/configuration`, AuthMiddleware, this.getConfiguration)
    }

    private getConfiguration = async (request: Request, response: Response, next: NextFunction) => {
        const configuration = await this.getConf()
          response.send(configuration)

    }

    private getConf = () : Promise<string> => {
        return new Promise((resolve, rejects) => {
        
            const reader = new fs.ReadStream(`/data/app/client.conf` as any)
            let buffer: string = ""
    
            reader.on('data', (data) => {
                if(data)
                    buffer += data
            })
            
            reader.on('end', () => {
              resolve(buffer)
            })
        })
    }    

    private getIntegrity = async (request: Request, response: Response) => {
        const configuration = await this.getConf()
        const algorithm = 'Sha1', shasum = crypto.createHash(algorithm)
        shasum.update(configuration)
        response.json({algorithm: algorithm, hash: shasum.digest('hex')})
    }
  
}

export default VpnController
