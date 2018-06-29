"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {       // get all users
    knex
      .select("*")
      .from("users")
      .then((results) => {
        res.json(results);
      });
  });

  router.get("/:userid/resources", (req, res) => {   // get all resources created by a user
    const userid = req.params.userid;
    knex
      .select("*")
      .from("resources")
      .where("creator_id", userid)
      .then((results) => {
        res.json(results);
      }).catch((err) => {
        console.log('AAAAAAAHHH', err)
      })
  })

  router.get("/:userid/likes", (req, res) => {   // get all likes for a user
    const userid = req.params.userid;
    knex
      .select("*")
      .from("likes")
      .where("user_id", userid)
      .then((results) => {
        res.json(results);
      }).catch((err) => {
        console.log('aaaaaarrgghh', err)
      })
  })
  router.post("/new", (req, res) => {   // create new resource 
    const name = req.body.name;
    knex ('resources')
      .insert({name: name})
})
res.redirect('/');



  return router;
}
