const express = require('express');
const postController = require('../controllers/post.controller');
const tokenValidation = require('../middlewares/tokenValidation');
const postExists = require('../middlewares/postExists');
const hasCategory = require('../middlewares/hasCategory');
const neededFields = require('../middlewares/neededFields');

const postRouter = express.Router();

postRouter.get('/', tokenValidation, postController.read);

postRouter.get('/:id', postExists, tokenValidation, postController.readById);

postRouter.post('/', hasCategory, neededFields, tokenValidation, postController.create);

module.exports = postRouter;