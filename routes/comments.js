"use strict";

const express = require('express');
const router  = express.Router();


module.exports = knex => {

  router.get("/:userid", (req, res) => {
    const userid = req.params.userid;
    knex
      .select("*")
      .from("comments")
      .where("user_id", userid)
      .then( results => {
        res.json(results);
      })
      .catch( err => {
        console.log(err);
      })
  })

  router.get("/:resourceId", (req, res) => {
    const resourceId = req.params.resourceId;
    let resources = [];

    knex
      .select("*")
      .from("resources")
      .where("id", resourceId)
      .then( resources => {
        return knex
        .select("*")
        .from("comments")
        .where("resource_id", resourceId)
      })
      .then( comments => {
        return res.json({resources, comments});
      })
      .catch( err => {
        console.log(err)
      })
  })

  return router;
}
