var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('test')
});
router.get('/:id', function(req, res, next) {
  var id = req.params.id
  res.send(id)
});

module.exports = router;
