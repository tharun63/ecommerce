const express = require('express');
const router = express.Router();//invoked cap r

const { signup, signin, signout, requireSignin } = require('../controllers/auth');
const { userSignupValidator } = require("../validator");


router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;