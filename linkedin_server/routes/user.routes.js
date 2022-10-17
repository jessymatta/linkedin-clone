const {Router} = require('express');
const {getAllJobs, getProfile} = require('../controllers/UserController')
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const router = Router();

router.get('/', AuthMiddleware, getProfile);
router.get('/jobs', AuthMiddleware, getAllJobs);

module.exports = router;