import HttpException from './HttpException';

class AuthenticationTokenMissingException extends HttpException {
  constructor() {
    super(401, 'Authentication token missing or bad header');
  }
}

export default AuthenticationTokenMissingException;