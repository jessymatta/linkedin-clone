const {Router} = require('express');
const {getAllJobs, getProfile, addEducation} = require('../controllers/UserController')
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const router = Router();

router.get('/', AuthMiddleware, getProfile);
router.get('/jobs', AuthMiddleware, getAllJobs);
router.post('/education', AuthMiddleware, addEducation);

module.exports = router;