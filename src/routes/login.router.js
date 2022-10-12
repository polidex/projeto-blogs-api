const express = require('express');
const loginController = require('../controllers/login.controller');
const hasUser = require('../middlewares/hasUser');
const requiredFields = require('../middlewares/requiredFields');

const loginRouter = express.Router();

loginRouter.post('/', hasUser, requiredFields, loginController.login);

module.exports = loginRouter;