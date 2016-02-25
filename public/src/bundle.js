angular.module('app', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {
      url: '/',
      template: '<ss-home></ss-home>'
    });

}]);

angular.module('app')
.directive('ssHome', ["homeService", function(homeService) {
  return {
    restrict: 'E',
    template: 'WUT',
    link: function(scope, elem, attrs) {
      console.log(homeService.getAll());
    }
  };
}]);

angular.module('app')
.factory('homeService', ["$http", function($http) {

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

}]);
