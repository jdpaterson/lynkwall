"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/:resourceid", (req, res) => {
    const resource_id = req.params.resourceid;
    knex
      .select("*")
      .from("comments")
      .where("resource_id", resource_id )
      .then((results) => {  
        // res.json(results);
       // res.render("index", {resources: results}) -what is the page for comment
    });
  });

  router.post("/new", (req, res) => {
     
    knex('comment')
      .insert({
        comment_text: req.body.comment_text, 
        created_on: req.body.created_on,
        updated_on: req.body.updated_on,
        resource_id: req.body.resource_id,
        user_id: req.body.user_id
      })
      res.redirect('/');
       
  });

  return router;
}