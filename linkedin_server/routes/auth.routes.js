const {Router} = require('express');
const {login, signup} = require('../controllers/auth.controller')
const router = Router();

router.post('/login/personal', loginPersonal);
router.post('/login/company', loginCompany);
router.post('/signup/personal', signupPersonal);
router.post('/signup/company', signupCompany);


module.exports = router;