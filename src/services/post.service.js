const { BlogPost, User, Category } = require('../models');

const read = async () => {
  const result = await BlogPost.findAll({ attributes: { exclude: ['user_id'] },
    include: [{
      model: User, as: 'user', attributes: { exclude: ['password'] },
    }, { model: Category, /* as: 'categories',  */through: { attributes: [] },
    }],
  });
  return result;
};

const readById = async (id) => {
  const result = await BlogPost.findOne({ where: { id },
    attributes: { exclude: ['user_id'] },
    include: [{
      model: User, as: 'user', attributes: { exclude: ['password'] },
    }, { model: Category, /* as: 'categories',  */through: { attributes: [] },
    }],
  });
  return result;
};

module.exports = {
  read,
  readById,
};