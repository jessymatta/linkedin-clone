const {Router} = require('express');
const {getAllJobs} = require('../controllers/UserController')
const router = Router();

router.get('/', getAllJobs);

module.exports = router;