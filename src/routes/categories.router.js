const express = require('express');
const categoriesController = require('../controllers/categories.controller');
const nameRequired = require('../middlewares/nameRequired');
const tokenValidation = require('../middlewares/tokenValidation');

const categoriesRouter = express.Router();

categoriesRouter.get('/', tokenValidation, categoriesController.read);

categoriesRouter.post('/', tokenValidation, nameRequired, categoriesController.create);

module.exports = categoriesRouter; 