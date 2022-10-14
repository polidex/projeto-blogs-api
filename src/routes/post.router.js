const express = require('express');
const postController = require('../controllers/post.controller');
const tokenValidation = require('../middlewares/tokenValidation');
const postExists = require('../middlewares/postExists');

const postRouter = express.Router();

postRouter.get('/', tokenValidation, postController.read);

postRouter.get('/:id', postExists, tokenValidation, postController.readById);

module.exports = postRouter;