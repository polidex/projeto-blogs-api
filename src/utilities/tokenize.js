require('dotenv/config');
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const tokenize = (payload) => {
  const token = jwt.sign({ ...payload }, process.env.JWT_SECRET, jwtConfig);
  return token;
};

const untokenize = (token) => {
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  return decode;
};

module.exports = {
  tokenize,
  untokenize,
};