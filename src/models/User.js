const User = (sequilize, DataTypes) => {
  const User = sequilize.define('User', {
    id: DataTypes.INTEGER,
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  User.associate = (model) => {
    User.hasMany(model.BlogPost, {
      foreignKey: 'user_id', as: 'blogposts'
    });
  }

  return User;
};

module.exports = User;