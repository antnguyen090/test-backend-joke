var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("tesst")
  res.render('./pages/singlepage', { pageTitle: 'Express' });
});

module.exports = router;
