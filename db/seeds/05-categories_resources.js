exports.seed = function(knex, Promise) {
  return knex('categories_resources').del()
    .then(function () {
      return Promise.all([
        knex('categories_resources').insert({category_id: 1, resource_id: 1}),
        knex('categories_resources').insert({category_id: 2, resource_id: 2}),
        knex('categories_resources').insert({category_id: 3, resource_id: 3})
      ]);
    });
};
