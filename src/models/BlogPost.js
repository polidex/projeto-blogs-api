const BlogPost = (sequilize, DataTypes) => {
  const BlogPost = sequilize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, 
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId:{
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'blog_posts',
    timestamps: false,
    underscored: true,
  });

  BlogPost.associate = (model) => {
    BlogPost.belongsTo(model.User, {
      foreignKey: 'user_id', as: 'user'
    });
  }

  return BlogPost;
};

module.exports = BlogPost;