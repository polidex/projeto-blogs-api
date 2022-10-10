const userService = require('../services/user.service');

const create = async (req, res) => {
  const { name } = req.body;

  const result = await userService.create(name);
  return res.status(201).json(result/* { token: 'padrão muito louco de caracteres' } */);
};

module.exports = {
  create,
};