exports.up = function(knex, Promise) {
  return Promise.all([

  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('rating')
  ])
};
