angular.module('app')
.factory('homeService', function($http) {

  return {

    getAll: function() {
      return $http({
        method: 'GET',
        url: '/getAll'
      }).then(function(resp) {
        return resp;
      });
    }

  };

});
