const postService = require('../services/post.service');

const read = async (_req, res) => {
  const result = await postService.read();
  return res.status(200).json(result);
};

const readById = async (req, res) => {
  const { id } = req.params;

  const result = await postService.readById(id);
  return res.status(200).json(result);
};

module.exports = {
  read,
  readById,
};