const express = require('express');
const userController = require('../controllers/user.controller');
const emailValidation = require('../middlewares/emailValidation');
const nameValidation = require('../middlewares/nameValidation');
const passwordValidation = require('../middlewares/passwordValidation');
const resgisterValidation = require('../middlewares/resgisterValidation');

const userRouter = express.Router();

userRouter.post('/', nameValidation, passwordValidation, emailValidation,
resgisterValidation, userController.create);

module.exports = userRouter;