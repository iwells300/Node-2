var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('taller', { title: 'Area Taller' ,isTaller:true });
});

module.exports = router;
