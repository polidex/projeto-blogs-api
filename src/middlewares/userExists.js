const { User } = require('../models');

const userExists = async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  if (!user) return res.status(404).json({ message: 'User does not exist' });
  next();
};

module.exports = userExists;