const {Router} = require('express');
const {getAllJobs, getProfile, addEducation,addExperience} = require('../controllers/UserController')
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const router = Router();

router.get('/', AuthMiddleware, getProfile);
router.get('/jobs', AuthMiddleware, getAllJobs);
router.post('/educations', AuthMiddleware, addEducation);
router.post('/experiences', AuthMiddleware, addExperience);

module.exports = router;