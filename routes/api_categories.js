"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("categories")
      .then( categories => {
        res.json(categories);
      })
      .catch( err => {
        console.log(err)
      })
  })

  return router;

}
