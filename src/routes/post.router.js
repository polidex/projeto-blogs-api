const express = require('express');
const postController = require('../controllers/post.controller');
const tokenValidation = require('../middlewares/tokenValidation');
const postExists = require('../middlewares/postExists');
const hasCategory = require('../middlewares/hasCategory');
const neededFields = require('../middlewares/neededFields');
// const userPostValidation = require('../middlewares/userPostValidation');
const updateRequiredFields = require('../middlewares/updateRequiredFields');
const searchByQueryValidation = require('../middlewares/searchByQueryValidation');

const postRouter = express.Router();

postRouter.get('/search', tokenValidation, searchByQueryValidation,
postController.readByQuery);

postRouter.get('/', tokenValidation, postController.read);

postRouter.get('/:id', postExists, tokenValidation, postController.readById);

postRouter.post('/', tokenValidation, hasCategory, neededFields, postController.create);

postRouter.put('/:id', tokenValidation, updateRequiredFields, /* userPostValidation, */
postController.update);

postRouter.delete('/:id', tokenValidation, /* userPostValidation,  */postExists,
postController.deleteById);

module.exports = postRouter;