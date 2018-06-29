exports.seed = function(knex, Promise) {
  return knex('rating').del()
    .then(function () {
      return Promise.all([
        knex('rating').insert({rate: 5, created_on: '2018-06-26' , updated_on: null, resource_id: 1, user_id: 1}),
        knex('rating').insert({rate: 5, created_on: '2018-06-26' , updated_on: null, resource_id: 1, user_id: 2}),
        knex('rating').insert({rate: 5, created_on: '2018-06-27' , updated_on: null, resource_id: 2, user_id: 2}),
        knex('rating').insert({rate: 4, created_on: '2018-06-26' , updated_on: null, resource_id: 3, user_id: 3}),
        knex('rating').insert({rate: 4, created_on: '2018-06-29' , updated_on: null, resource_id: 3, user_id: 1}),
      ]);
    });
};
