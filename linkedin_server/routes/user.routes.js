const {Router} = require('express');
const {getAllJobs} = require('../controllers/UserController')
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const router = Router();

router.get('/', AuthMiddleware, getAllJobs);

module.exports = router;