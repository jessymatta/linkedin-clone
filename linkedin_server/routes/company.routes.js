const {Router} = require('express');
const {getAllPostedJobs, addJobOpening, getCompanyProfile} = require('../controllers/CompanyController')
const AuthMiddlewareCompany = require('../middlewares/AuthMiddlewareCompany');
const router = Router();

router.get('/job', AuthMiddlewareCompany, getAllPostedJobs);
router.post('/job', AuthMiddlewareCompany, addJobOpening);
router.get('/', AuthMiddlewareCompany, getCompanyProfile);

module.exports = router;