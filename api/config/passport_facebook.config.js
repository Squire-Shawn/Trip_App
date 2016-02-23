var mongoose = require('mongoose'),
  passport = require('./passport.config'),
  FacebookStrategy = require('passport-facebook').Strategy,
  fb = require('passport-facebook'),
  User = mongoose.model('User', require('../models/user.schema'));

  passport.use(new FacebookStrategy({
    clientID: process.env.Trip_Facebook_App_Id,
    clientSecret: process.env.Trip_Facebook_App_Secret,
    callbackURL: "http://localhost:8080/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
     User.findOne({ facebook_id: profile.id }, function(err, user) {
       if(err)  return cb(err);
       if(user) return cb(err, user);
       User.create({ facebook_id: profile._json.id, name: profile._json.name},
         function(err, newUser) {
         return cb(err, newUser);
       });
    });
    }


));

module.exports = passport;
