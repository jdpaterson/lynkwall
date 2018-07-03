# Lynkwall
Lynkwall is a a full stack web application built using Node and Express that allows users organize resources they find on the internet. Users are able to add their own resources or like other users resources. They can also search for resources that have already been added to the system. 

These functionalities are powered by a robust set of SQL queries.

## Screenshots

### Resources can be any URL on the internet. Add anything you want!
![Add links](https://i.imgur.com/ZUY6vil.gif)


### Search for resources added by you or other users!
![Search!](https://imgur.com/XN6vU2m.gif)



### Rate resources that you like! Comment on other resources!
![Comment and rate](https://i.imgur.com/6RpXEP6.gif)







## Project Setup


These instructions will get you a copy of the project up and running on your local machine. See deployment for notes on how to deploy the project on a live system.

```
1. Create your own empty repo on GitHub
2. Clone this repository (do not fork)
```
## Migration order
Must perform migration 1,2,3,4 in this exact order

#### **Do not use 20180628050751_rating.js**

#### Order:


`1 - create_users_table.js`

`2 - create_resources.js`

`3 - categories.js`

`4 - categories_resources.js`

`5 - likes.js`

`6 - comments.js`

`7 - rating.js`


## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5.  If you are using a vagrant machine, type the following command in your terminal to connect to your postgres server:
```
psql -U vagrant -d template1
```
Run the following SQL commands to create the necesary objects in the DB:
```
CREATE ROLE labber WITH LOGIN password 'laber';
CREATE DATABASE midterm OWNER labber;
```
Remember these - they will serve as your DB connection credentials for your local development database.

6. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
7. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
8. Run the server: `npm run local`
9. Visit `http://localhost:8080/`
```
## Dependencies
- Node 5.10.x or above
- NPM 3.8.x or above
- body-parser
- dotenv
- express
- foundation-sites 6.0 or above
- knex
- knex-logger
- node-sass-middleware
- moment
- morgan
- pg
- request
- sass

