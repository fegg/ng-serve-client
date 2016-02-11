var express = require('express');
var router = express.Router();

var hits = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(200, {
        hits: hits
    });
});

router.post('/hit', function(req, res, next) {
    hits++;

    res.send(200, {
        hits: hits
    });
});

module.exports = router;