const { Op } = require('sequelize');
const { BlogPost, User, Category, PostCategory } = require('../models');

const read = async () => {
  const result = await BlogPost.findAll({ attributes: { exclude: ['user_id'] },
    include: [{
      model: User, as: 'user', attributes: { exclude: ['password'] },
    }, { model: Category, as: 'categories', through: { attributes: [] },
    }],
  });
  return result;
};

const readById = async (id) => {
  const result = await BlogPost.findOne({ where: { id },
    attributes: { exclude: ['user_id'] },
    include: [{
      model: User, as: 'user', attributes: { exclude: ['password'] },
    }, { model: Category, as: 'categories', through: { attributes: [] },
    }],
  });
  return result;
};

const createCategoryPost = async (postId, categoryIds) => {
  const result = await Promise.all(categoryIds
    .map((id) => PostCategory.create({ postId, categoryId: id })));
  return result;
};

const create = async (id, title, content, categoryIds) => {
  const result = await BlogPost.create({ title,
    content,
    userId: id,
    published: new Date(),
    updated: new Date() });
  await createCategoryPost(result.id, categoryIds);
  return result;
};

const update = async (id, title, content) => {
  await BlogPost.update({ title, content }, { where: { id } });
  const result = readById(id);
  return result;
};

const deleteById = async (id) => {
  const result = await BlogPost.destroy({ where: { id } });
  return result;
};

const readByQuery = async (q) => {
const result = await BlogPost.findOne({
  where: { [Op.or]: [{ title: { [Op.like]: `%${q}%` } },
      { content: { [Op.like]: `%${q}%` } }] },
  include: [{ model: User, as: 'user', attributes: { exclude: ['password'] },
  }, { model: Category, as: 'categories', through: { attributes: [] } }],
});

  if (!result) return [];

  return [result];
};

module.exports = {
  read,
  readById,
  create,
  update,
  deleteById,
  readByQuery,
};