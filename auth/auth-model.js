const db = require('../data/connection');

module.exports = {
  add,
  findBy,
  getAll,
};

function add(data) {
  return db('users').insert(data);
}

function findBy(filter) {
  return db('users').where(filter).orderBy('id');
}

function getAll() {
  return db('users');
}