const { User } = require('../models');

const create = async (email) => {
  const result = await User.create(email);
  return result;
};

const read = async () => {
  const result = await User.findAll();
  return result;
};

module.exports = {
  create,
  read,
};