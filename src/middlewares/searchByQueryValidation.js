const postService = require('../services/post.service');

const searchByQueryValidation = async (req, res, next) => {
  const { q } = req.query;

  const result = await postService.read();

  if (!q) return res.status(200).json(result);
  next();
};

module.exports = searchByQueryValidation;