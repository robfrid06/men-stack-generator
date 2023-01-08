import { Router } from 'express'

const router = Router();

// GET
router.get('/', function(req, res) {
  res.render('index');
});

export { 
  router
}
