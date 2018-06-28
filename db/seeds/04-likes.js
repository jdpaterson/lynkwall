exports.seed = function(knex, Promise) {
  return knex('likes').del()
    .then(function () {
      return Promise.all([
        knex('likes').insert({created_on: '2018-06-28', updated_on: null, resource_id: 1, user_id: 1}),
        knex('likes').insert({created_on: '2018-06-27', updated_on: null, resource_id: 2, user_id: 2}),
        knex('likes').insert({created_on: '2018-06-26', updated_on: null, resource_id: 3, user_id: 3})
      ]);
    });
};
