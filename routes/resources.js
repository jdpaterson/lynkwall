"use strict";

const express = require("express");
const router  = express.Router();
const request = require('request');
const moment = require("moment");
const utility = require('../utility');
const user_id = 1;
const urlPreviewKey = '5b390f942f6c14c92f9c98f8a02705400ceddbf88a7d3';
module.exports = (knex) => {

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
                .from("ratings")
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
    request(`http://api.linkpreview.net/?key=${urlPreviewKey}&q=${req.body.url}`, function (error, response, body) {
      const jsonResp = JSON.parse(body);      
      //res.redirect("/");
      knex("resources")
        .returning("resource_id")
        .insert({
          url: jsonResp.url,
          title: jsonResp.title,
          description: jsonResp.description,
          image_url: jsonResp.image,
          creator_id: user_id
        })
        .then(() => {
          res.redirect("/");
        })
        /*.then((resource_id) => {
          knex
          .select("category_id")
          .from("categories")
          .where("category", req.body.category )
          .then((dbResponse) => {
            knex("categories_resources")
            .returning("unique_id")
            .insert({
              category_id: dbResponse[0].category_id,
              resource_id: resource_id[0]
            })
            .then(() => {
              res.redirect("/");
            })
          })*/
        });
      });


  router.post("/:resource_id/comments", (req, res) => {

    const now = moment().format('YYYY MM DD');
    knex("comments")
    .insert({
      comment_text: req.body.comment_text,
      created_on: now,
      updated_on: now,
      resource_id: req.params.resource_id,
      user_id: user_id
    })
    .then(res.redirect('/'));

  });

  router.post("/:resourceid/likes", (req, res) => {

    const resId = req.params.resourceid;
    //Needs to be changed once we implement Users/Cookies
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

  router.post("/:resourceid/rating", (req, res) => {
    const resource_id = req.params.resourceid;
    const newRating = req.body.rating;
    const user_id = 1;
    const now = moment().format("YYYY MM DD");

    knex
      .select("*")
      .from("ratings")
      .where({
        resource_id: resource_id,
        user_id: user_id
      }).then((ratings) => {
        if (ratings.length !== 0){
          ratings[0].rating_id;
          knex('ratings')
            .where({rating_id: ratings[0].rating_id})
            .update({
              rating: newRating,
              updated_on: now
            }).then((res)=>{
              return res;
            });
        }else{
          knex('ratings')
            .insert({
              resource_id: resource_id,
              user_id: user_id,
              rating: newRating,
              created_on: now
            }).then((res)=>{
              return res;
            });
        }
      })
 });

  return router;
}
