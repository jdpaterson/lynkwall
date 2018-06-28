exports.up = function(knex, Promise) {  
  return Promise.all([
    knex.schema.createTable('rating', function (table) {
      table.increments('rating_id');
      table.integer('rate');
      table.date('created_on');
      table.date('updated_on'); 
      table.integer('resource_id').unsigned().notNullable();
      table.integer('user_id').unsigned().notNullable();
  
      table.foreign('resource_id').references('resource_id').inTable('resources');
      table.foreign('user_id').references('id').inTable('users');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('rating')
  ])
};