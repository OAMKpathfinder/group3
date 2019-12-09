var express = require('express');
var router = express.Router();
var objectDataset = require('../models/objectsDB');



router.get('/', function (req, res, next) {

    objectDataset.getAllobjects(function (err, rows) {
        //console.log(rows.rows);
        if (err) {
            res.json(err);
        } else {
            res.json(rows.rows);
        }
    });

});
router.get('/objs/:objectsid', function (req, res, next) {
    console.log(req);
    if (req.params.objectsid) {
        objectDataset.getobjectsByid(req.params.objectsid, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows.rows);
            }
        });

    }
});

router.post('/', function (req, res, next) {
    objectDataset.addobjects(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });
});

router.delete('/:objectsid', function (req, res, next) {
    objectDataset.deleteobjects(req.params.objectsid, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
router.put('/:objectsid', function (req, res, next) {
    //console.log(req.body);
    objectDataset.updateobjects(req.params.objectsid, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;