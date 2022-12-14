const { User } = require('../models');

const resgisterValidation = async (req, res, next) => {
  const { email } = req.body;

  const hasUser = await User.findOne({ where: { email } });
  
  if (hasUser) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

module.exports = resgisterValidation;