var AWS = require('aws-sdk'),
  S3 = new AWS.S3({ apiVersion: '2006-03-01', params: { Bucket: 'trip-app' } });

module.exports = {

  getAll: function(req, res) {
    res.json('Get All');
  },
  uploadPhoto: function(req, res) {
    S3.putObject(req.body, function(err, resp) {
      if(err) return res.status(500).json(err);
      return res.status(200).json(resp);
    });
  }

};
