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
    const userid = req.params.userid;
    knex
      .select("*")
      .from("resources")
<<<<<<< HEAD
      .where("creator_id", userid);
      res.json(results);
=======
      .where("creator_id", userid)
      .then((results) => {
        res.json(results); 
      }).catch((err)=> {
        console.log('AAAAAAAHHH', err)
      })
>>>>>>> master
  })

  router.get ("/:userid/likes", (req, res) => {   // get all likes for a user
    const userid = req.params.userid;
    knex
      .select("*")
      .from ("likes")
<<<<<<< HEAD
      .where("user_id", userid);
      res.json(results);
=======
      .where("user_id", userid)
      .then((results) => {
        res.json(results);        
      }).catch((err) => {
        console.log ('aaaaaarrgghh', err)
      })
>>>>>>> master
  })

  return router;
}
