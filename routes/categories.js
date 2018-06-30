"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/:category_id/resources", (req, res) => {
    const categoryId = req.params.category_id;
    const myQuery =
    knex
      .select("*")
      .from("categories_resources")
      .where("category_id", categoryId)
      .then((categories_resources) => {
        const resource_ids = [];
        for (let cat of categories_resources){
          resource_ids.push(cat.resource_id);
        }        
        knex
          .select("*")
          .from("resources")
          .whereIn("resource_id", resource_ids)
          .then((resources) => {
            knex.select("*")
              .from("categories")
              .then((categories) => {
                res.render('index', {
                  resources: resources,
                  categories: categories
                });
              })

          })


      });
    });
  return router;
}
