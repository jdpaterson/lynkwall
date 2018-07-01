exports.seed = function(knex, Promise) {
  return knex('ratings').del()
    .then(function () {
      return Promise.all([
        knex('ratings').insert({rating: 5, created_on: '2018-06-26' , updated_on: null, resource_id: 1, user_id: 1}),
        knex('ratings').insert({rating: 5, created_on: '2018-06-26' , updated_on: null, resource_id: 1, user_id: 2}),
        knex('ratings').insert({rating: 5, created_on: '2018-06-27' , updated_on: null, resource_id: 2, user_id: 2}),
        knex('ratings').insert({rating: 4, created_on: '2018-06-26' , updated_on: null, resource_id: 3, user_id: 3}),
        knex('ratings').insert({rating: 4, created_on: '2018-06-29' , updated_on: null, resource_id: 3, user_id: 1}),
      ]);
    });
};
