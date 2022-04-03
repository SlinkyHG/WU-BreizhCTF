import HttpException from './HttpException';

class BadTokenException extends HttpException {
  constructor() {
    super(401, 'Wrong authentication token');
  }
}

export default BadTokenException;