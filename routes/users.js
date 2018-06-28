"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {       // get all users
    knex
      .select("*")
      .from("users")
      .then((results) => {
        res.json(results);
      });
  });

  router.get ("/:userid/resources", (req, res) => {   // get all resources created by a user
    const resources_created = knex
    .select("*")
    .from("users")
    .where("creator", userid);
  })

  router.get ("/:userid/likes", (req, res) => {   // get all likes for a user
    const resources_liked = knex
    .select("*")
    .from ("likes")
    .where("user_id", userid);
  })

  return router;
}
