const Category = (sequilize, DataTypes) => {
  const Category = sequilize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  });

  return Category;
};

module.exports = Category;