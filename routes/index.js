var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')('mongodb://localhost:27017/nodeblog');

db.then(()=>console.log("Connected correctly to db server"));

/* Homepage Blog Post */
router.get('/', function(req, res, next) {
  //var db =  req.db;

  const posts = db.get('posts');

  posts.find()
  .then((posts)=>{
    res.render('index', {
      "posts": posts
    });
  });

  // posts.find({},{},function(err, posts){
  //   console.log(posts);
  //     res.render('index', {
  //         "posts": posts
  //     });
  // });
});

module.exports = router;
