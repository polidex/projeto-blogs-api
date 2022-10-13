const { User } = require('../models');

const create = async (email) => {
  const result = await User.create(email);
  return result;
};

const read = async () => {
  const result = await User.findAll({ attributes: { exclude: ['password'] } });
  return result;
};

const readById = async (id) => {
  const result = await User.findOne({ where: { id },
    attributes: { exclude: ['password'] } });
  return result;
};

const deleteById = async (id) => {
  const result = await User.destroy({ where: { id } });
  return result;
};

module.exports = {
  create,
  read,
  readById,
  deleteById,
};