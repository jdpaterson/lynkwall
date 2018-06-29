exports.seed = function(knex, Promise) {
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        knex('comments').insert({comment_text: 'Good site to take academic courses', created_on: '2018-06-26' , updated_on: null, resource_id: 1, user_id: 1}),
        knex('comments').insert({comment_text: 'Affordable for online learning', created_on: '2018-06-26' , updated_on: null, resource_id: 2, user_id: 2}),
        knex('comments').insert({comment_text: 'Watch for sale to buy courses at $12.99 USD', created_on: '2018-06-29' , updated_on: null, resource_id: 2, user_id: 1}),
        knex('comments').insert({comment_text: 'Great to follow Microsoft blogs', created_on: '2018-06-26' , updated_on: null, resource_id: 3, user_id: 3}),
        knex('comments').insert({comment_text: 'It let me take MIT courses', created_on: '2018-06-29' , updated_on: null, resource_id: 1, user_id: 3}),
        knex('comments').insert({comment_text: 'Microsoft has done a good job with blogging new tech', created_on: '2018-06-29' , updated_on: null, resource_id: 3, user_id: 1}),
      ]);
    });
};
