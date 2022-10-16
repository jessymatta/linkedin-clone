const {Router} = require('express');
const {loginPersonal, signupPersonal,signupCompany} = require('../controllers/AuthController')
const router = Router();

router.post('/login/personal', loginPersonal);
// router.post('/login/company', loginCompany);
router.post('/signup/personal', signupPersonal);
router.post('/signup/company', signupCompany);


module.exports = router;