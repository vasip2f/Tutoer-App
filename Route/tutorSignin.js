const express = require('express');
const SignUpRoute = express.Router();
const SignInRoute = express.Router();
const SignRoute = require('../Controller/tutorSignin');
SignUpRoute.post('/signup',SignRoute);
SignInRoute.post('/signin',SignRoute);

module.exports = SignUpRoute;
module.exports = SignInRoute;