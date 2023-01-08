import { Router } from 'express'
import * as resourcesCtrl from '../controllers/resources.js'

const router = Router();

// GET
router.get('/', resourcesCtrl.index);

export {
  router
}
