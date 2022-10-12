const { User } = require('../models');

const hasUser = async (req, res, next) => {
  const { email, password } = req.body;
  
  const user = await User.findOne({ where: { email, password } });
  if (!user) return res.status(400).json({ message: 'Invalid fields' });
  next();
};

module.exports = hasUser;