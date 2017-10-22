var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient
var assert = require('assert')

router.get('/', function (req, res, next) {
  res.send('test')
});
router.get('/:id', function (req, res, next) {
  var id = req.params.id
  var result = ''
  var url = 'mongodb://localhost:27017/trialect'
  mongo.connect(url, function (err, db) {
    assert.equal(null, err)
    console.log('Request: ' + id)
    db.collection('trialect').find({'name': id}).toArray(function (err, docs) {
      assert.equal(err, null)
      res.send(docs[0])
    })
      db.close()
  })
})

module.exports = router;
