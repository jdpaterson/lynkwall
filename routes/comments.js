"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("comments")
      .where("user_id", userid)
      .then((results) => {  
        //res.json(results);
        res.render("index", {resources: results})
    });
  });

  router.post("/new", (req, res) => {
     
    knex('comments')
      .insert({
        comment_text: req.body.comment_text, 
        created_on: req.body.created_on,
        updated_on: null,
        resource_id: req.body.resource_id,
        user_id: req.body.user_id
      })
      res.redirect('/');
       
  });

  return router;
}
