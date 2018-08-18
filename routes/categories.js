"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/:category_id/resources", (req, res) => {
    const categoryId = req.params.category_id;
    let resources = [];
    knex
      .select("*")
      .from("categories_resources")
      .where("category_id", categoryId)
      .then( categories_resources => {
        const resource_ids = [];
        for (let cat of categories_resources){
          resource_ids.push(cat.resource_id);
        }
        return knex
          .select("*")
          .from("resources")
          .whereIn("id", resource_ids)
      })
      .then( qResources => {
        resources = qResources;
        return knex.select("*")
          .from("categories")
      })
      .then( categories => {
        res.render('index', {
          resources,
          categories,
          session: req.session
        })
      })
      .catch( err => {
        console.log(err)
      })

  })

  router.post("/:resourceid/new", (req, res) => {
    const resource_id = req.params.resourceid;
    //const category_id; //todo here
    knex('categories')
      .insert({
        category_id: req.body.created_on,
        resource_id: resource_id
      })
      .then( result => {
        res.redirect('/');
      })
      .catch( err => {
        console.log(err)
      })
  })

  return router;

}
