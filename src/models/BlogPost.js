const BlogPost = (sequilize, DataTypes) => {
  const BlogPost = sequilize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, 
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id:{
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'blog_posts',
    timestamps: false,
  });

  BlogPost.associate = (model) => {
    BlogPost.belongsTo(model.User, {
      foreignKey: 'user_id', as: 'user'
    });
  }

  return BlogPost;
};

module.exports = BlogPost;