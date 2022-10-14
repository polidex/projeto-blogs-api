const { Category } = require('../models');

const hasCategory = async (req, res, next) => {
  const { categoryIds } = req.body;

  const categories = await Promise.all(categoryIds.map(async (id) => {
    const result = await Category.findOne({ where: { id } });
    return result;
  }));
  const categoryValidation = await categories.some((category) => !category);

  if (categoryValidation) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = hasCategory;