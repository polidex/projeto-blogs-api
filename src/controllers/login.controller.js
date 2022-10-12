const loginService = require('../services/login.service');
const { tokenize } = require('../utilities/tokenize');

const login = async (req, res) => {
  const { email, password } = req.body;

  const result = await loginService.login(email, password);
  const loginToken = tokenize(result);
  return res.status(200).json({ token: loginToken });
};

module.exports = {
  login,
};