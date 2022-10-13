const userService = require('../services/user.service');
const { tokenize } = require('../utilities/tokenize');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const result = await userService.create({ displayName, email, password, image });
  const registerToken = tokenize(result);
  return res.status(201).json({ token: registerToken });
};

const read = async (_req, res) => {
  const result = await userService.read();
  return res.status(200).json(result);
};

const readById = async (req, res) => {
  const { id } = req.params;

  const result = await userService.readById(id);
  return res.status(200).json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.user;

  await userService.deleteById(id);
  return res.status(204).json('deletado');/* end(); */
};

module.exports = {
  create,
  read,
  readById,
  deleteById,
};