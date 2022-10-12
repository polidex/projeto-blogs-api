const loginService = require('../services/login.service');

const login = async (req, res) => {
  const { email, password } = req.body;

  const result = await loginService.login(email, password);
  return res.status(200).json(result);
};

module.exports = {
  login,
};