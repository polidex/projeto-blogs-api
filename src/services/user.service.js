const { User } = require('../models');

const create = async (name) => {
  const result = await User.create(name);
  return result;
};

module.exports = {
  create,
};