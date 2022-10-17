const {Router} = require('express');
const {getAllPostedJobs, addJobOpening, getCompanyProfile, getApplicantProfile} = require('../controllers/CompanyController')
const AuthMiddlewareCompany = require('../middlewares/AuthMiddlewareCompany');
const router = Router();

router.get('/job', AuthMiddlewareCompany, getAllPostedJobs);
router.post('/job', AuthMiddlewareCompany, addJobOpening);
router.get('/', AuthMiddlewareCompany, getCompanyProfile);
router.get('/applicant', AuthMiddlewareCompany, getApplicantProfile);

module.exports = router;