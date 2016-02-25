angular.module('app')
.directive('ssHome', function(homeService) {
  return {
    restrict: 'E',
    template: 'WUT',
    link: function(scope, elem, attrs) {
      console.log(homeService.getAll());
    }
  };
});
