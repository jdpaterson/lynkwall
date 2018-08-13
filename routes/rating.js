"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/:userid", (req, res) => {
    const userid = req.params.userid;
    knex
      .select("*")
      .from("ratings")
      .where("user_id", userid)
      .then((results) => {
        res.json(results);
        //res.render("index", {resources: results})
      })
      .catch( err => {
        console.log(err)
      })
    })

  router.get("/:resourceid", (req, res) => {
    const resource_id = req.params.resourceid;
    knex
      .select("*")
      .from("ratings")
      .where("resource_id", resource_id )
      .then((results) => {
        res.json(results);
      })
  })

  return router;
}
