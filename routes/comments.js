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
        //res.render("index", {resources: results})
      })
      .catch( err => {
        console.log(err);
      })
  })

  router.get("/:resourceId", (req, res) => {
    const resourceId = req.params.resourceId;
    knex
      .select("*")
      .from("resources")
      .where("id", resourceId)
      .then((results) => {
        return knex
        .select("*")
        .from("comments")
        .where("resource_id", resourceId)
      })
      .then( results2 => {
        return res.json({results, results2});
        //res.render("index", {resources: results})
      })
      .catch( err => {
        console.log(err)
      })
  })

  return router;
}
