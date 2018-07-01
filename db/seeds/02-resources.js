exports.seed = function(knex, Promise) {
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        knex('resources').insert({
          url: 'https://ocw.mit.edu/index.htm',
          title: 'MIT OpenCourseWare | Free Online Course Materials',
          description: 'Unlocking knowledge, empowering minds. Free course notes, videos, instructor insights and more from MIT.',
          image_url:'https://ocw.mit.edu/images/MIT_dome.jpg',
          creator_id: 1
        }),
        knex('resources').insert({
          url: 'https://blogs.msdn.microsoft.com/visualstudio/tag/node-js/',
          title: 'Node.js | The Visual Studio Blog',
          description: 'The official source of product insight from the Visual Studio Engineering Team',
          image_url:'https://msdnshared.blob.core.windows.net/media/2017/02/8814.VisualStudioClean152.png', creator_id: 2
        }),
        knex('resources').insert({
          url: 'https://www.udemy.com',
          title: 'Online Courses - Learn Anything, On Your Schedule | Udemy',
          description: 'Udemy is an online learning and teaching marketplace with over 65,000 courses and 15 million students. Learn programming, marketing, data science and more.',
          image_url:'https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg',
          creator_id: 3
        }),
        knex('resources').insert({
          url: 'https://www.coursera.org/',
          title: 'Coursera | Online Courses & Credentials by Top Educators. Join for Free',
          description: 'Learn online and earn valuable credentials from top universities like Yale, Michigan, Stanford, and leading companies like Google and IBM. Join Coursera for free and transform your career with degrees, certificates, Specializations, &amp; MOOCs in data science, computer science, business, and dozens of other topics.',
          image_url:'http://s3.amazonaws.com/coursera/media/Coursera_Computer_Narrow.png',
          creator_id: 2
        }),
        knex('resources').insert({
          url: 'https://lagunita.stanford.edu/',
          title: '| Stanford Lagunita',
          description: 'Please enter your e-mail address below, and we will e-mail instructions for setting a new password.',
          image_url:'https://www-media.stanford.edu/su-identity/images/brandbar-stanford-logo@2x.png',
          creator_id: 1
        }),
      ]);
    });
};
