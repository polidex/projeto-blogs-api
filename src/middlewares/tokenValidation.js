const { untokenize } = require('../utilities/tokenize');

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const result = untokenize(authorization);
    req.user = result.dataValues;
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = tokenValidation;