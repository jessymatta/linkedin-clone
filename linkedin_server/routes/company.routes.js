const {Router} = require('express');
const {getAllPostedJobs} = require('../controllers/CompanyController')
const AuthMiddlewareCompany = require('../middlewares/AuthMiddlewareCompany');
const router = Router();

router.get('/', AuthMiddlewareCompany, getAllPostedJobs);

module.exports = router;