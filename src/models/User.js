const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
    },
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, 
  { tableName: 'users' });

  User.associate = (model) => {
    User.hasMany(model.BlogPost, {
      foreignKey: 'user_id', as: 'blogposts'
    });
  }

  return User;
};

module.exports = User;