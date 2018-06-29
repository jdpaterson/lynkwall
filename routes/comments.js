"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/:userid", (req, res) => {
    const userid = req.params.userid;
    knex
      .select("*")
      .from("comments")
      .where("user_id", userid)
      .then((results) => {  
        res.json(results);
        //res.render("index", {resources: results})

      })
    })
      
  router.get("/:resourceid", (req, res) => {
    const resource_id = req.params.resourceid;
    knex
      .select("*")
      .from("comments")
      .where("resource_id", resource_id )
      .then((results) => {
        res.json(results);
    });
  });

  router.post("/:resourceid/new", (req, res) => {
    const resource_id = req.params.resourceid;
    knex('comments')
      .insert({
        comment_text: req.body.comment_text,
        created_on: req.body.created_on,
        updated_on: null,
        resource_id: resource_id,
        user_id: 1 //hardcoded for now
      }).then((result)=>{
      res.redirect('/');
    });
 });

  return router;
}
