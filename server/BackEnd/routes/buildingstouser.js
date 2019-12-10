var express = require('express');
var router = express.Router();
var buildingstouserDataset = require('../models/buildingstouserDB');



//router.get('/', function (req, res, next) {

//    buildingstouserDataset.getAllmaterials(function (err, rows) {
//        if (err) {
//            res.json(err);
//        } else {
//            res.json(rows.rows);
//        }
//    });

//});
router.get('/bdusr/:buildingstouserid', function (req, res, next) {
    //console.log(req);
    if (req.params.buildingstouserid) {
        buildingstouserDataset.getbuildingstouserByid(req.params.buildingstouserid, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows.rows);
            }
        });
    }
});

router.post('/', function (req, res, next) {
    buildingstouserDataset.addbuildingstouser(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });
});

router.delete('/:buildingstouserid', function (req, res, next) {
    buildingstouserDataset.deletebuildingstouser(req.params.buildingstouserid, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
router.put('/:buildingstouserid', function (req, res, next) {
    //console.log(req.body);
    buildingstouserDataset.updatebuildingstouser(req.params.buildingstouserid, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;