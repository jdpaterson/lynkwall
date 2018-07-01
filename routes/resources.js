"use strict";

const express = require("express");
const router  = express.Router();
const moment = require("moment");
const utility = require('../utility');

module.exports = (knex) => {

  // router.get("/", (req, res) => {
  //   knex
  //     .select("*")
  //     .from("resources")
  //     .then((results) => {
  //       knex
  //       .select("*")
  //       .from("categories")
  //       .then((results2) => {

  //         return res.json({results, results2});
  //         //res.render("index", {resources: results})
  //     });
  //   });
  // });

  router.get("/", (req, res) => {
    const countStr = 'select resource_id from resources'
    knex
      .select("*")
      .from("resources")
      .then((resources) => {
        knex
        .select("*")
        .from("categories")
        .then((categories) => {
          knex
            .select("resource_id")
            .count("like_id as like_count")
            .from("likes")
            .groupBy("resource_id")
            .whereIn('resource_id', function() {
              this.select('resource_id').from('resources')
            })
            .then( (likecount)=> {
              knex
               .select("resource_id")
               .count("comment_id as comment_count")
               .from("comments")
               .groupBy("resource_id")
               .whereIn('resource_id', function() {
                 this.select('resource_id').from('resources')
               })
               .then((commentcount) => {
                knex
                .select("resource_id")
                .avg("rate as rating_avg")
                .from("rating")
                .groupBy("resource_id")
                .whereIn('resource_id', function() {
                  this.select('resource_id').from('resources')
                })
                .then((ratingaverage) => {

                  return res.json({resources, categories, likecount, commentcount, ratingaverage});
                })

              })

            })

          //res.render("index", {resources: results, categories: results2, countlikes: result3})
      });
    });
  });

  router.get("/search", (req, res) => {
    const query = req.query.queryStr;
    knex
      .select("*")
      .from("resources")
      .where("title", "like", `%${query}%`)
      .orWhere("description", "like", `%${query}%`)
      .orWhere("url", "like", `%${query}%`)
      .then((resources) => {
        knex
          .select("*")
          .from("categories")
          .then((categories) => {
            res.render("index", {
              resources: resources,
              categories: categories
            })
          })
      })
  })

  router.get("/:resourceid/comments", (req, res) => {
    const resource_id = req.params.resourceid;
    knex
      .select("*")
      .from("comments")
      .where("resource_id", resource_id )
      .then((comments) => {
        knex
        .select("*")
        .from("resources")
        .where("resource_id", resource_id )
        .then((resources) => {
          knex
          .select("*")
          .from("users")
          .whereIn("id", function(){
            this.select('user_id').from('comments').where("resource_id", resource_id);
          })
          .then((users)=> {
            let userObj = utility.createObj(users, comments);
            return res.render("comments", {comments, resources, userObj});
        })

      });
    });
  });


  router.get("/:resourceid/likes", (req, res) => {
    const resource_id = req.params.resourceid;
    knex
      .count("like_id")
      .from("likes")
      .where("resource_id", resource_id )
      .then((results) => {
        res.json(results);
       // res.render("index", {resources: results})
    });
  });

  router.post("/new", (req, res) => {
    knex("resources")
      .insert({
        url: req.body.url,
        title: req.body.title,
        description: req.body.description,
        creator_id: req.body.creator_id
      })
      .then((response) => {
        res.redirect("/");
      });

  });

  router.post("/:resourceid/comments", (req, res) => {

    const {conment_text, created_on, updated_on, resource_id, user_id} = req.body;
    knex("comment")
    .insert({
      comment_text,
      created_on,
      updated_on,
      resource_id,
      user_id
    })
    .then();


    return res.redirect("/");

  });

  router.post("/:resourceid/likes", (req, res) => {

    const resId = req.params.resourceid;
    //Needs to be changed once we implement Users/Cookies
    const userId = 1;
    const now = moment().format("YYYY MM DD");

    //If a like exists then delete it , else add a new one.
    knex
      .select("*")
      .from("likes")
      .where({
        user_id: userId,
        resource_id: resId
      }).then((results)=>{
        if (results.length === 0){
          knex("likes")
            .insert({
              resource_id: resId,
              user_id: userId,
              created_on: now
            }).then((insert)=>{});
        }else{
          knex("likes")
            .where({
              resource_id: resId,
              user_id: userId
            }).del().then((count) => {});
        }
      });
  });

  return router;
}
