var express = require('express');
var router = express.Router();
const user = require('../controller/userController');

router.post('/register', user.RegisterData);
router.post('/login', user.LoginData);



module.exports = router;
