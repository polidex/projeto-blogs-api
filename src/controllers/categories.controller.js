const categoriesService = require('../services/categories.service');

const create = async (req, res) => {
  const { name } = req.body;

  const result = await categoriesService.create(name);
  return res.status(201).json(result);
}; 

module.exports = {
  create,
};