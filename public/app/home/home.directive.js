angular.module('app')
.directive('ssHome', function(homeService) {
  return {
    restrict: 'E',
    templateUrl: 'app/home/home.template.html',
    controller: function($scope, Upload, $timeout) {
      $scope.$watch('files', function() {
        $scope.upload($scope.files);
      });
      $scope.$watch('file', function() {
        if($scoe.file) {
          $scope.files = [$scope.file];
        }
      });
      $scope.log = '';

      $scope.upload = function(files) {
        if(files && files.length) {
          Upload.upload({
            url: '/uploadPictures',
            data: {
              Key: 
            }
          })
        }
      }
    }
  };
});
