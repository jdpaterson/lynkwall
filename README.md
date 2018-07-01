# Lynkwall
Lynkwall is a a full stack web application built using Node and Express that allows users organize resources they find on the internet. Users are able to add their own resources or like other users resources. They can also search for resources that have already been added to the system. 

These functionalities are powered by a powerful set of queries that utilize a SQL database (PostGresSQL).



## Getting Started


These instructions will get you a copy of the project up and running on your local machine. See deployment for notes on how to deploy the project on a live system.

```
1. Create your own empty repo on GitHub
2. Clone this repository (do not fork)
```

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies
- 
- Node 5.10.x or above
- NPM 3.8.x or above

## Migration order
- Must perform migration 1,2,3,4 in this exact order
- Don't use 20180628050751_rating.js
1 - create_users_table.js
2 - create_resources.js
3 - categories.js
4 - categories_resources.js
5 - likes.js
6 - comments.js
7 - rating.js
