"use strict";

require('dotenv').config();
const path          = require('path');
const PORT          = process.env.PORT || 8080;
const ENV           = process.env.ENV || "development";
const express       = require("express");
const bodyParser    = require("body-parser");
const cookieSession = require('cookie-session');
const app           = express();

const knexConfig    = require("./knexfile");
const knex          = require("knex")(knexConfig[ENV]);
const morgan        = require('morgan');
const knexLogger    = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");
const resourcesRoutes = require("./routes/resources");
const categoriesRoutes = require("./routes/categories");
const apiCategoriesRoutes = require("./routes/api_categories");
const apiLikesRoutes = require("./routes/api_likes");
const apiRatingsRoutes = require("./routes/api_ratings");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
app.use(morgan('dev'));
// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
  name: 'lynkWallSession',
  secret: '12345678',
  maxAge: 24 * 60 * 60 * 1000
}));
app.use(express.static("public"));
app.use('/js', express.static(path.join(__dirname, '/node_modules/foundation-sites/dist/js')));

// Mount all resource routes
app.use("/resources", resourcesRoutes(knex));
app.use("/users", usersRoutes(knex));
app.use("/categories", categoriesRoutes(knex));
app.use("/api/v1/categories", apiCategoriesRoutes(knex));
app.use("/api/v1/likes", apiLikesRoutes(knex));
app.use("/api/v1/ratings", apiRatingsRoutes(knex));

// Home page
app.get("/", (req, res) => {
  req.session.views = (req.session.views || 0) + 1
  console.log(req.session);
  knex
  .select("*")
  .from("resources")
  .then( resources => {
      res.render("index", { resources, session: req.session })
  })
})

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
