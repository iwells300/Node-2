var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('modelos', { title: 'Nuestros modelos', isModelos:true
  });
});

module.exports = router;
