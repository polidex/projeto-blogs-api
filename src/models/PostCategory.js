const PostCategory = (sequilize, DataTypes) => {
  const PostCategory = sequilize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });

    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
      as: 'categories',
    });
  }

  return PostCategory;
};

module.exports = PostCategory;