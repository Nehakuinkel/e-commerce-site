var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("<h1>This is simple node app</h1>")
});

module.exports = router;