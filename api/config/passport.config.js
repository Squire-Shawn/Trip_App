var passport = require('passport'),
  User = require('mongoose')
    .model('User', require('../models/user.schema'));

passport.serializeUser(function(User, cb) {
  cb(null, User);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;
