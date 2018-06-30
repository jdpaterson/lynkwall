exports.seed = function(knex, Promise) {
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        knex('resources').insert({url: 'https://ocw.mit.edu/index.htm', title: 'MIT courses', description: 'Link to MIT courses', image_url:'', creator_id: 1}),
        knex('resources').insert({url: 'https://blogs.msdn.microsoft.com/visualstudio/tag/node-js//', title: 'nodejs blog', description: 'Microsoft nodejs Blog', image_url:'', creator_id: 2}),
        knex('resources').insert({url: 'https://www.udemy.com', title: 'Udemy', description: 'Link to Udmy courses', image_url:'', creator_id: 3}),
        knex('resources').insert({url: 'https://www.coursera.org/', title: 'Coursera', description: 'Link to Coursera', image_url:'', creator_id: 1}),
        knex('resources').insert({url: 'https://lagunita.stanford.edu/', title: 'Standford courses', description: 'Link to Standford', image_url:'', creator_id: 1}),
      ]);
    });
};
