exports.up = function(knex, Promise) {  
  return Promise.all([
    knex.schema.createTable('resources', function (table) {
      table.increments('resource_id');
      table.string('URL');
      table.string('title');
      table.string('description');
      table.string('imageURL');
      table.integer('creator_id').unsigned().notNullable();;
  
      table.foreign('creator_id').references('id').inTable('users');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('resources')
  ])
};
