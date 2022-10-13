const userService = require('../services/user.service');
const { tokenize } = require('../utilities/tokenize');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const result = await userService.create({ displayName, email, password, image });
  const registerToken = tokenize(result);
  return res.status(201).json({ token: registerToken });
};

module.exports = {
  create,
};