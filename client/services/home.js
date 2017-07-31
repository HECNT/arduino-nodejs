// var url = helpers.getUrl();

angular.module(MODULE_NAME)
.service('HomeService', ['$http', function($http) {
  var url = "http://localhost:4000";
  var urlBase = url + '/home';

  this.doLed = function (d) {
    return $http.post(urlBase, d);
  }

  this.doServo = function (d) {
    return $http.post(urlBase + '/servo', d);
  }

}]);
