const express = require('express');
const userController = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.post('/', userController.create);

module.exports = userRouter;