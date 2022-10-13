const { untokenize } = require('../utilities/tokenize');

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    untokenize(authorization);
  } catch (err) {
    return res.status(401).json('Expired or invalid token');
  }
  next();
};

module.exports = tokenValidation;