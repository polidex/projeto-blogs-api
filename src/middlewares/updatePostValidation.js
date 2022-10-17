const postService = require('../services/post.service');
const { untokenize } = require('../utilities/tokenize');

const updatePostValidation = async (req, res, next) => {
  const { id } = req.params;
  const { authorization } = req.headers;

  const post = await postService.readById(id);
  const user = await untokenize(authorization);

  if (post.userId !== user.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  next();
};

module.exports = updatePostValidation;