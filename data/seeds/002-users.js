
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'user_admin', password: 'passadmin', role: 1 },
        {username: 'user_user', password: 'passuser', role: 2 }
      ]);
    });
};
