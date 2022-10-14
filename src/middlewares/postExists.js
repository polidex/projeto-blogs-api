const { BlogPost } = require('../models');

const userExists = async (req, res, next) => {
  const { id } = req.params;

  const user = await BlogPost.findOne({ where: { id } });

  if (!user) return res.status(404).json({ message: 'Post does not exist' });
  next();
};

module.exports = userExists;