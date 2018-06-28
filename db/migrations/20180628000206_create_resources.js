
exports.up = function(knex, Promise) {
  knex.schema.createTable('Resources', function (table) {
    table.increments('resource_id');
    table.string('URL');
    table.string('title');
    table.string('title');
    table.string('imageURL');
    table.int('creator');

    table.foreign('creator').references('userId').inTable('users')
  })
};

exports.down = function(knex, Promise) {
  
};
