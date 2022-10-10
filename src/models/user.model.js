const connection = require('../db/connection');

const create = async (name) => {
  const query = 'INSERT INTO Blogs-api-dev.users (name) VALUE (?)';
  const result = await connection.execute(query, [name]);
  return result[0];
};

module.exports = {
  create,
};