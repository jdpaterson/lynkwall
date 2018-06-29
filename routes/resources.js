"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("resources")
      .then((results) => {
        knex
        .select("*")
        .from("categories")
        .then((results2) => {
          return res.json({results, results2});
          //res.render("index", {resources: results})
      });
    });
  });

  router.get("/:resourceid/comments", (req, res) => {
    console.log(req.baseUrl)
    const resource_id = req.params.resourceid;
    knex
      .select("*")
      .from("comments")
      .where("resource_id", resource_id )
      .then((results) => {
        //res.json(results);
        res.render("comments", {comments: results});
    });
  });

  router.post("/", (req, res) => {

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

  router.post("/:resourceid/comments", (req, res) => {
     console.log('inside post ');
     console.log('rg body is', req.body);

     const {conment_text, created_on, updated_on, resource_id, user_id} = req.body;
    knex('comment')
    .insert({
      comment_tex,
      created_on,
      updated_on,
      resource_id,
      user_id
    })
    .then();


    return res.redirect('/');

  });

  return router;
}
