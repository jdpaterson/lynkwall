"use strict";

const express = require('express');
const router = express.Router();
const userId = 1;

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("likes")
      .then( likes => {
        res.json(likes);
      })
      .catch( err => {
        console.log(err)
      })
  })

  //Get likes by user_id
  router.get("/user/:user_id", (req, res) => {

    return knex
      .select("*")
      .from("likes")
      .where("user_id", userId)
      .then( likes => {
        res.json(likes);
      })
      .catch( err => {
        console.log(err)
      })
  })

  router.get("/resources", (req, res) => {

    const resIds = [];
    for (let resId in req.query){
      resIds.push(req.query[resId]);
    }

    knex
      .select("*")
      .from("likes")
      .whereIn("resource_id", resIds )
      .then( likes => {
        res.json(likes);
      })
      .catch( err => {
        console.log(err)
      })
  })

  return router;

}
