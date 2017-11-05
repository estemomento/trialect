var express = require('express')
var path = require('path')
var compression = require('compression')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var mongo = require('mongodb').MongoClient
var assert = require('assert')
var fallback = require('express-history-api-fallback')

var app = express()
var trialect

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(compression())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/stat/', async function(req, res, next) {
  var charNum = (await trialect.distinct('char')).length
  var proNum = await trialect.count()
  var mmNum = await trialect.find({mm: {$ne: ''}}).count()
  var xdNum = await trialect.find({xd: {$ne: ''}}).count()
  var ulNum = await trialect.find({ul: {$ne: ''}}).count()
  res.send({charNum, proNum, mmNum, xdNum, ulNum})
})

app.get('/data/:id', function (req, res, next) {
  var id = req.params.id
  console.log('Request: ' + id)
  trialect.find({'char': id}).toArray(function (err, docs) {
    assert.equal(err, null)
    res.send(docs)
  })
})

app.use(fallback('index.html', {root: path.join(__dirname, 'public')}))

module.exports = mongo.connect('mongodb://trialect:tria1ectp%40ssw0rd@localhost:27017/trialect', {uri_decode_auth: true}).then(_db => {
  trialect = _db.collection('trialect')
  return app
})
