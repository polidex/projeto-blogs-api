const { User } = require('../models');

const resgisterValidation = async (req, res, next) => {
  const { email } = req.body;

  const hasUser = await User.findOne({ where: { email } });
  console.log(`O retorno de hasUser é ${hasUser}`);
  
  if (hasUser) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

module.exports = resgisterValidation;