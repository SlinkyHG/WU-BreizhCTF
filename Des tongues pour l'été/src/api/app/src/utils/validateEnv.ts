import {
    cleanEnv, port, str, num
  } from 'envalid';
  
  function validateEnv() {
    cleanEnv(process.env, {
      PORT: port(),
    })
  }
  
  export default validateEnv