var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var mongo = require('mongodb').MongoClient
var assert = require('assert')

var app = express()

// uncomment after placing your favicon in /bin
//app.use(favicon(path.join(__dirname, 'bin', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/data/:id', function (req, res, next) {
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

module.exports = app
