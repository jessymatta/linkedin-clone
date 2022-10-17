const {Router} = require('express');
const {getAllPostedJobs, addJobOpening} = require('../controllers/CompanyController')
const AuthMiddlewareCompany = require('../middlewares/AuthMiddlewareCompany');
const router = Router();

router.get('/', AuthMiddlewareCompany, getAllPostedJobs);
router.post('/job', AuthMiddlewareCompany, addJobOpening);

module.exports = router;