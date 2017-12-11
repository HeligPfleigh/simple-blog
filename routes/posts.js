const express = require('express');
const router = express.Router();
const mongo = require('mongodb');

const db = require('monk')('mongodb://localhost:27017/nodeblog');

db.then(()=>console.log("Connected correctly to db server"));

router.get('/add', function(req, res, next){
    res.render('addpost', {
        "title": "Add Post" 
    });
});

module.exports = router;