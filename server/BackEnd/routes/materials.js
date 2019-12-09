var express = require('express');
var router = express.Router();
var materialsDataset = require('../models/materialsDB');



router.get('/', function (req, res, next) {

    materialsDataset.getAllmaterials(function (err, rows) {
        //console.log(rows.rows);
        if (err) {
            res.json(err);
        } else {
            res.json(rows.rows);
        }
    });

});
router.get('/mats/:materialsid', function (req, res, next) {
    console.log(req);
    if (req.params.materialsid)
    {
        materialsDataset.getmaterilasByid(req.params.materialsid, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows.rows);
            }
        });

    }
});

router.post('/', function (req, res, next) {
    materialsDataset.addmaterials(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });
});

router.delete('/:materialsid', function (req, res, next) {
    materialsDataset.deletematerials(req.params.materialsid, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
router.put('/:materialsid', function (req, res, next) {
    //console.log(req.body);
    materialsDataset.updatematerials(req.params.materialsid, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;