"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("resources")
      .then((results) => {  
        // res.json(results);
        res.render("index", {resources: results})
    });
  });

  router.post("/new", (req, res) => {
     
    knex('resources')
      .insert({
        URL: req.body.URL, 
        title: req.body.title,
        description: req.body.description,
        imageURL: req.body.imageURL,
        creator_id: req.body.creator_id
      })
      res.redirect('/');
       
  });

  return router;
}
