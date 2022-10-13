const { User } = require('../models');

const create = async (email) => {
  const result = await User.create(email);
  return result;
};

module.exports = {
  create,
};