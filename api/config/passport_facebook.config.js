var mongoose = require('mongoose'),
  passport = require('./passport.config'),
  FacebookStrategy = require('passport-facebook'),
  fb = require('passport-facebook'),
  User = require('mongoose')
    .model('User', require('../models/user.schema'));

  passport.use(new FacebookStrategy({
    clientID: process.env.Trip_Facebook_App_Id,
    clientSecret: process.env.Trip_Facebook_App_Secret,
    callbackURL: "http://localhost:8080/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    var user = User.find({ facebook_id: profile.id }, function(err, user) {
      return cb(err, user);
    });
  }
));

module.exports = passport;
