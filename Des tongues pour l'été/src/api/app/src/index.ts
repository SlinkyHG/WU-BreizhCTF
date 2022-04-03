import App from './app'
import validateEnv from './utils/validateEnv'
import AuthController from './controllers/authentication.controller'
import VpnController from './controllers/vpn.controller'
import * as dotenv from 'dotenv'

dotenv.config()
validateEnv();


const app = new App(
  [ 
    // Routers express
    new AuthController(),
    new VpnController(),
  ] 
);

app.listen();