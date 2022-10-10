const userModel = require('../models/user.model');

const create = async (name) => {
  const result = await userModel.create(name);
  return result;
};

module.exports = {
  create,
};