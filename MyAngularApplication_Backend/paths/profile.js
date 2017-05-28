var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://commonUser:1234@ds031895.mlab.com:31895/myangulardatabase', ['profiles']);

//Get user Profile
router.get('/profile/:userId', function(req, res, next){
    db.profiles.findOne({_userId: req.params.id}, function(err, profile){
        if(err){
            res.send(err);
        }
        res.json(profile);
    });
});

router.get('/profile', function(req, res, next){
    db.profile.find(function(err, profile){
        if(err){
            res.send(err);
        }
        res.json(profile);
    });
});

module.exports = router;