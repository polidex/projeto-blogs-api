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

const create = async (req, res) => {
  // const result = 'caminho feliz!';
  const { id } = req.user;
  console.log('-------------->', id); 
  const { title, content, categoryIds } = req.body;
  const result = await postService.create(id, title, content, categoryIds);
  return res.status(201).json(result);
};

const update = async (req, res) => {
  // const result = 'caminho feliz!';
  const { id } = req.params;
  const { title, content } = req.body;

  const result = await postService.update(id, title, content);
  return res.status(200).json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  await postService.deleteById(id);
  return res.status(204).end();
};

const readByQuery = async (req, res) => {
  const { q } = req.query;

  const result = await postService.readByQuery(q);
  return res.status(200).json(result);
};

module.exports = {
  read,
  readById,
  create,
  update,
  deleteById,
  readByQuery,
};