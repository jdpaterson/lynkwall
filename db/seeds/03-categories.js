exports.seed = function(knex, Promise) {
  return knex('categories').del()
    .then(function () {
      return Promise.all([
        knex('categories').insert({category: 'Academic', created_on: '2018-06-28',  updated_on: null}),
        knex('categories').insert({category: 'Tutorial', created_on: '2018-06-26',  updated_on: null}),
        knex('categories').insert({category: 'Blog', created_on: '2018-06-27',  updated_on: null}),
      ]);
    });
};
 
