exports.seed = function(knex, Promise) {
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        knex('resources').insert({URL: 'https://ocw.mit.edu/index.htm', title: 'MIT courses', description: 'Link to MIT courses', imageURL:'', creator_id: 1}),
        knex('resources').insert({URL: 'https://blogs.msdn.microsoft.com/visualstudio/tag/node-js//', title: 'nodejs blog', description: 'Microsoft nodejs Blog', imageURL:'', creator_id: 2}),
        knex('resources').insert({URL: 'https://www.udemy.com', title: 'Udemy', description: 'Link to Udmy courses', imageURL:'', creator_id: 3}),
      ]);
    });
};

 
