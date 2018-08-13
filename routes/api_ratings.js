"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

    router.get("/", (req, res) => {
      knex
        .select("*")
        .from("ratings")
        .then( ratings => {
          res.json(ratings);
        })
        .catch( err => {
          console.log(err)
        })
    })

    router.get("/resources/user", (req, res) => {

      const resIds = [];
      for (let resId in req.query){
        resIds.push(req.query[resId]);
      }

      knex
        .select("*")
        .from("ratings")
        .whereIn("resource_id", resIds )
        .andWhere("user_id", 1)
        .then( likes => {
          res.json(likes);
        })
        .catch( err => {
          console.log(err)
        })
    })

    return router;

  }
