var mongoose = require('mongoose'),
  User_Model = require('./user.schema'),

  Trip_Model = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User_Model' },
    dates: {
      start: { type: Date, required: true },
      end: { type: Date, required: true }
    },
    photos: [{
      album: {type: Number},
      location: { type: mongoose.Schema.Types.ObjectId, ref: locations }
    }],
    locations: [{}]
  });

  module.exports = Trip_Model;
