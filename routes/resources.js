import { Router } from 'express'
import * as resourcesCtrl from '../controllers/resources.js'

const router = Router()

/* GET users listing. */
router.get('/', resourcesCtrl.index)

export {
  router
}
