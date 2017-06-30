var express = require('express')
var path = require('path')
var port = process.env.PORT || 8000
var app = express()

  app.set('views', './views/pages')
  app.set('view engine', 'pug')
  app.use(express.bodyParser())
  app.listen(port)

  console.log('started on port' + port)

  app.get('/', function(req, res) {
    res.render('index', {
      title: 'dogbeatcat, index'
    })
  })

app.get('/detail/', function(req, res) {
    res.render('detail', {
      title: 'dogbeatcat, detail'
    })
  })

app.get('/admin/', function(req, res) {
    res.render('admin', {
      title: 'dogbeatcat, admin'
    })
  })

app.get('/list/', function(req, res) {
    res.render('list', {
      title: 'dogbeatcat, list'
    })
  })
