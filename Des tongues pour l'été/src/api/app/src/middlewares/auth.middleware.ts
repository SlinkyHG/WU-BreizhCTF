import { NextFunction, Response, Request } from 'express';

import AuthenticationTokenMissingException from '../exceptions/AuthenticationTokenMissingException';
import BadTokenException from '../exceptions/BadTokenException';

async function authMiddleware(request: Request, response: Response, next: NextFunction) {
    const headers = request.headers

    if (headers) {
        try {
            if(headers["x-forwarded-for"] === "127.0.0.1" || headers["x-forwarded-for"] === "localhost")
                next()
            else    
                throw "Pas de header"

        } catch (error) {
            next(new BadTokenException());
        }

    } else {
        next(new AuthenticationTokenMissingException());
    }
}

export const AuthMiddleware = authMiddleware;