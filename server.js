var express = require('express'),
  app = express(),
  port = process.argv[2] || 8080,
  bodyParser = require('body-parser').json,
  mongoose = require('mongoose');

mongoose
  .set('debug', true)
  .connect('mongodb://localhost:27017/trip_app', function() {
  console.log('Mongoose is also Listening');
});

app
  .use(bodyParser())
  .use(express.static(__dirname + 'public'))

  .listen(port, function() {
    console.log('Listening on:', port);
  });
