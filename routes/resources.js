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

  router.get("/:resourceid/likes", (req, res) => {
    const resource_id = req.params.resourceid;
    knex
      .count('like_id')
      .from("likes")
      .where("resource_id", resource_id )
      .then((results) => {
        res.json(results);
       // res.render("index", {resources: results})
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

    const {conment_text, created_on, updated_on, resource_id, user_id} = req.body;
    knex('comment')
    .insert({
      comment_text,
      created_on,
      updated_on,
      resource_id,
      user_id
    })
    .then();


    return res.redirect('/');

  });

  router.post("/:resourceid/likes", (req, res) => {

    const resId = req.params.resourceid;
    const userId = req.body.userid;
    console.log('Posting resourceId: ', resId);
    console.log('Posting userId: ', userId);
    knex('likes')
      .insert({
        resource_id: resId,
        user_id: userId
      })
      .then();
  });

  return router;
}
