import HttpException from './HttpException';

class MaintenanceModeException extends HttpException {
  constructor() {
    super(401, 'Maintenance');
  }
}

export default MaintenanceModeException;