var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://commonUser:1234@ds031895.mlab.com:31895/myangulardatabase', ['financialInformation']);

//Get user financial information
router.get('/financialInformation/:userId', function(req, res, next){
    db.financialInformation.findOne({userId: req.params.userId}, function(err, fi){
        console.log(req.params.userId);
        if(err){
            res.send(err);
        }
        res.json(fi);
    });
});

router.post('/financialInformation', function(req, res, next){
    var financialInformation = req.body;
    db.financialInformation.save(financialInformation, function(err, fi){
            if(err){
                res.send(err);
            }
            res.json(fi);
    });
});

module.exports = router;