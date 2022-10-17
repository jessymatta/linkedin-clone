const {Router} = require('express');
const {getAllJobs, getProfile, addEducation,addExperience, addProfile} = require('../controllers/UserController')
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const router = Router();

router.get('/', AuthMiddleware, getProfile);
router.get('/jobs', AuthMiddleware, getAllJobs);
router.post('/educations', AuthMiddleware, addEducation);
router.post('/experiences', AuthMiddleware, addExperience);
router.post('/profile', AuthMiddleware, addProfile);

module.exports = router;