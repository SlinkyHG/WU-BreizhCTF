import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';

import Controller from './interfaces/express.controller.interface';
import errorMiddleware from './middlewares/error.middleware';

class App {
    public app: express.Application
    
    constructor(expressControllers: Controller[]) {
      this.app = express()
      this.initializeMiddlewares()
      this.initializeHeaders()
      this.initializeControllers(expressControllers)
      this.initializeErrorMiddleware()
    }

    public listen() {
      this.app.listen(process.env.PORT, () => {
        console.log(`App listening on the port ${process.env.PORT}`)
      })
    }

    private initializeMiddlewares() {
      this.app.use(bodyParser.json())
      this.app.use(cookieParser())
      this.app.use('*', cors())
    }
  
    private initializeErrorMiddleware() {
      this.app.use(errorMiddleware)
    }
  
    private initializeHeaders() {
      this.app.use((req, res, next) => {
        res.header("content-type", "application/json; charset=utf-8")
        console.log((new Date()).toISOString() + ' | IP: ' + (req.headers['x-forwarded-for'] || req.connection.remoteAddress) + ' - URL: ' + req.url)
        next();
      })
    }
  
    public getServer() {
      return this.app
    }
  
    private initializeControllers(controllers: Controller[]) {
      controllers.forEach((controller) => {
        this.app.use('/', controller.router)
      })
    }

  }
  
  export default App