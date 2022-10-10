const BlogPost = (sequilize, DataTypes) => {
  const BlogPost = sequilize.define('BlogPost', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  });

  BlogPost.associate = (model) => {
    BlogPost.belongsTo(model.User, {
      foreignKey: 'user_id', as: 'user'
    });
  }

  return BlogPost;
};

module.exports = BlogPost;