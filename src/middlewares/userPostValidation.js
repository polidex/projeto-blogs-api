const postService = require('../services/post.service');
const { untokenize } = require('../utilities/tokenize');

const userPostValidation = async (req, res, next) => {
  const { id } = req.params;
  const { authorization } = req.headers;

  const post = await postService.readById(id);
  console.log('---------this is result of post------>', post.user.dataValues.id);
  const user = await untokenize(authorization);
  console.log('---------this is result of user------>', user.dataValues.id);

  if (post.user.dataValues.id !== user.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  next();
};

module.exports = userPostValidation;

// [ blog api ] requisito 15 e 16 - acredito que seja a msm validação quebrando nas duas - sala 