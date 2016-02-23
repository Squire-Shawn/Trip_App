var express = require('express'),
  app = express(),
  port = 8080 || process.argv[2],
  bodyParser = require('body-parser').json,
  mongoose = require('mongoose'),
  passport = require('passport'),
  session     = require('express-session'),
  facebook = require('./api/config/passport_facebook.config');

mongoose
  .set('debug', true)
  .connect('mongodb://localhost:27017/trip_app', function() {
  console.log('Mongoose is also Listening');
});

app
  .use(bodyParser())
  .use(express.static(__dirname + '/public'))
  .use(passport.initialize())
  .use(passport.session())
  .use(session({
    secret: 'some_trips_are_not_worth_taking',
    resave: true,
    saveUninitialized: true
  }))

  .get('/', function(req, res) {
    return res.end();
  })
  .get('/home', function(req, res) {
    return res.end();
  })
  .get('/facebook', passport.authenticate('facebook', { scope: ['email'] }))
  .get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/#/', successRedirect: '/#/' }))


  .listen(port, function() {
    console.log('Listening on:', port);
  });
