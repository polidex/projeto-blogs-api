const express = require('express');
const postController = require('../controllers/post.controller');
const tokenValidation = require('../middlewares/tokenValidation');
const postExists = require('../middlewares/postExists');
const hasCategory = require('../middlewares/hasCategory');
const neededFields = require('../middlewares/neededFields');
const updatePostValidation = require('../middlewares/updatePostValidation');
const updateRequiredFields = require('../middlewares/updateRequiredFields');

const postRouter = express.Router();

postRouter.get('/', tokenValidation, postController.read);

postRouter.get('/:id', postExists, tokenValidation, postController.readById);

postRouter.post('/', tokenValidation, hasCategory, neededFields, postController.create);

postRouter.put('/:id', tokenValidation, updateRequiredFields, updatePostValidation,
postController.update);

module.exports = postRouter;