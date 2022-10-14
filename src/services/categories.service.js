const { Category } = require('../models');

const create = async (name) => {
  const result = await Category.create({ name });
  return result;
};

const read = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = {
  create,
  read,
};