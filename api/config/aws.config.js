var AWS = require('aws-sdk'),
  S3 = new AWS.S3({ apiVersion: '2006-03-01', params: { Bucket: 'trip-app' } });

module.exports = {

  getAll: function(req, res) {
    res.json('Get All');
  }

};
