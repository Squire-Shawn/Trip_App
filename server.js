var express = require('express'),
  app = express(),
  port = process.argv[2] || 8080,
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
  .use(passport.initialize())
  .use(passport.session())
  .use(session({
    secret: 'some_trips_are_not_worth_taking',
    resave: true,
    saveUninitialized: false
  }))
  .get('/facebook', passport.authenticate('facebook', { scope: ['user_friends', 'manage_pages'] }))
  .get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
    function(req, res) {
    // Successful authentication, redirect home.
    // res.redirect('/');
    res.send('GOT EEEEM');
  })
  .use(bodyParser())
  .use(express.static(__dirname + 'public'))

  .listen(port, function() {
    console.log('Listening on:', port);
  });
