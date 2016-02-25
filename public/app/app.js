angular.module('app', ['ui.router', 'ngFileUpload', 'ngCookies'])

.run(function($http, $cookies) {
  
})

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {
      url: '/',
      template: '<ss-home></ss-home>'
    });

});
