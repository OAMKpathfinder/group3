var express = require('express');
var router = express.Router();
var buildingtypeDb = require('../models/buildingtypeDb');



router.get('/', function (req, res, next) {

    buildingtypeDb.getAllbuildingtype(function (err, rows) {
        //console.log(rows.rows);
        if (err) {
            res.json(err);
        } else {
            res.json(rows.rows);
        }
    });

});
router.get('/bdtps/:buildingtypeid', function (req, res, next) {
    console.log(req);
    if (req.params.buildingtypeid) {
        buildingtypeDb.getAllbuildingtypeByid(req.params.buildingtypeid, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows.rows);
            }
        });

    }
});

router.post('/', function (req, res, next) {
    buildingtypeDb.addbuildingtype(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });
});

router.delete('/:buildingtypeid', function (req, res, next) {
    buildingtypeDb.deletebuildingtype(req.params.buildingtypeid, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
router.put('/:buildingtypeid', function (req, res, next) {
    //console.log(req.body);
    buildingtypeDb.updatebuildingtype(req.params.buildingtypeid, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;