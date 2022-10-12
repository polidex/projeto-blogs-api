const Category = (sequilize, DataTypes) => {
  const Category = sequilize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
    },
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
    timestamps: false,
});

  return Category;
};

module.exports = Category;