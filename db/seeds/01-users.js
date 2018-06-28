exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({ name: 'Alice'}),
        knex('users').insert({ name: 'Bob'}),
        knex('users').insert({ name: 'Charlie'})
      ]);
    })
    // .then(function () {
    //   knex.raw("SELECT setval('users_id_seq', COALESCE((SELECT MAX(id)+1 FROM users), 1), false);");
    //   // TODO: fix the sequence
    // })
};


