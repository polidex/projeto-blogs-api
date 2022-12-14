const express = require('express');
const userController = require('../controllers/user.controller');
const emailValidation = require('../middlewares/emailValidation');
const nameValidation = require('../middlewares/nameValidation');
const passwordValidation = require('../middlewares/passwordValidation');
const resgisterValidation = require('../middlewares/resgisterValidation');
const tokenValidation = require('../middlewares/tokenValidation');
const userExists = require('../middlewares/userExists');

const userRouter = express.Router();

userRouter.get('/', tokenValidation, userController.read);

userRouter.post('/', nameValidation, passwordValidation, emailValidation,
resgisterValidation, userController.create);

userRouter.get('/:id', tokenValidation, userExists, userController.readById);

userRouter.delete('/me', tokenValidation, userController.deleteById);

module.exports = userRouter;