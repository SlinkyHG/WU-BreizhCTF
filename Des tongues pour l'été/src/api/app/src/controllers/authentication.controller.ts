import { Request, Response, NextFunction, Router } from 'express'
import Controller from '../interfaces/express.controller.interface'
import validationMiddleware from '../middlewares/validation.middleware'
import { AuthMiddleware } from '../middlewares/auth.middleware'
import LogInDto from '../dto/authentification/logIn.dto'
import MaintenanceModeException from '../exceptions/MaintenanceModeException'

class AuthenticationController implements Controller {
    public path = '/auth'
    public router = Router()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/login`, validationMiddleware(LogInDto), this.maintenance)
        this.router.get(`${this.path}/logout`, AuthMiddleware, this.maintenance)
        this.router.get(`${this.path}/renew`, AuthMiddleware, this.maintenance)

    }

    private maintenance = async (request: Request, response: Response, next: NextFunction) => {
        const logInData: LogInDto = request.body
        next(new MaintenanceModeException)
    }
}

export default AuthenticationController