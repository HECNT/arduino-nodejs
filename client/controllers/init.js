

angular.module(MODULE_NAME)
.controller('initCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  var ctrl = this;
  $(document).ready(function() {
    $(".button-collapse").sideNav();

    $('.parallax').parallax();
  });
}]);
