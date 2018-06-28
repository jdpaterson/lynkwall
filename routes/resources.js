"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("resources")
<<<<<<< HEAD
      .then((results) => {
=======
      .then((results) => {  
>>>>>>> 846f472f84937d883d79998b94e3f688c8e3a388
        //res.json(results);
        res.render("index", {resources: results})
    });
  });

  return router;
}
