var express = require('express');
var router = express.Router();

var Activity = require('./../models/activity');

router.get('/', function(req, res, next) {
  Activity.getAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
