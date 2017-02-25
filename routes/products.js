var express = require('express');
var router = express.Router();

var Product = require('../models/Product');

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        Product.getProductById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        Product.getAllProducts(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.post('/', function (req, res, next) {
    Product.addProduct(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});
module.exports = router;