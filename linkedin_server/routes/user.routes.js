const {Router} = require('express');
const {getAllJobs, getProfile, addEducation,addExperience, addProfile,updateEducation,followCompany} = require('../controllers/UserController')
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const router = Router();

router.get('/', AuthMiddleware, getProfile);
router.get('/jobs', AuthMiddleware, getAllJobs);
router.post('/educations', AuthMiddleware, addEducation);
router.put('/educations', AuthMiddleware, updateEducation);
router.post('/experiences', AuthMiddleware, addExperience);
router.post('/profile', AuthMiddleware, addProfile);
router.post('/follow', AuthMiddleware, followCompany);

module.exports = router;