var mongoose = require('mongoose'),

  User_Model = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    birthday: { type: Date },
    date_created: { type: Date },
    facebook_id: { type: Number }
  });

  module.exports = User_Model;
