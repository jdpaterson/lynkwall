exports.seed = function(knex, Promise) {
  return knex('categories_resources').del()
    .then(function () {
      return Promise.all([
        knex('categories_resources').insert({category_id: 1, resource_id: 4}),
        knex('categories_resources').insert({category_id: 2, resource_id: 5}),
        knex('categories_resources').insert({category_id: 3, resource_id: 6})
      ]);
    });
};
