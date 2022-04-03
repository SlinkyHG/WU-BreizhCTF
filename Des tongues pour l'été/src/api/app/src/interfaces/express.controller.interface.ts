
import { Router } from 'express'

interface ExpressController {
  path: string
  router: Router
}

export default ExpressController