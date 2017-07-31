require('../services/home');
var sweetAlert = require('sweetAlert')

angular.module(MODULE_NAME)
.controller('homeCtrl', ['$scope', 'HomeService', '$timeout', function($scope, HomeService, $timeout) {
  var ctrl = this;
  $scope.hola = "new life"

  $scope.init = function () {
    $scope.disabled_input_confi = false;

    $(document).ready(function() {
      $('#jh').modal({dismissible:false});
      $('#jh').modal('open');
      $(".button-collapse").sideNav();
    });

    $scope.arrAngulos = [];
    var angulo = 0;
    for (var i = 0; i < 180; i++) {
      $scope.arrAngulos.push({angulo:angulo});
      angulo++;
    }
  }

  $scope.checkLed = function (item) {
    console.log(item);
    var d = {
      value : item
    }
    HomeService.doLed(d)
    .success(function(result){
      console.log(result);
    });
  }

  $scope.blurA = function (item,id) {
    //PARA SERVO 1
    if (id == 1) {
      console.log('servo 1');
      if (item < $scope.g_s1i || item > $scope.g_s1f) {
        sweetAlert("Oops...", "Angulo no permitido! Intentalo de nuevo.", "error");
      } else {
        var data = {
          value : item,
          id : id
        }
        HomeService.doServo(data)
        .success(function(result){
          console.log(result,'angulo');
        });
      }
    }
    if (id == 2) {
      console.log('servo 2');
      if (item < $scope.g_s2i || item > $scope.g_s2f) {
        sweetAlert("Oops...", "Angulo no permitido! Intentalo de nuevo.", "error");
      } else {
        var data = {
          value : item,
          id : id
        }
        HomeService.doServo(data)
        .success(function(result){
          console.log(result,'angulo');
        });
      }
    }
    if (id == 3) {
      console.log('servo 3');
      if (item < $scope.g_s3i || item > $scope.g_s3f) {
        sweetAlert("Oops...", "Angulo no permitido! Intentalo de nuevo.", "error");
      } else {
        var data = {
          value : item,
          id : id
        }
        HomeService.doServo(data)
        .success(function(result){
          console.log(result,'angulo');
        });
      }
    }
    if (id == 4) {
      console.log('servo 4');
      if (item < $scope.g_s4i || item > $scope.g_s4f) {
        sweetAlert("Oops...", "Angulo no permitido! Intentalo de nuevo.", "error");
      } else {
        var data = {
          value : item,
          id : id
        }
        HomeService.doServo(data)
        .success(function(result){
          console.log(result,'angulo');
        });
      }
    }
    if (id == 5) {
      console.log('servo 5');
      if (item < $scope.g_s5i || item > $scope.g_s5f) {
        sweetAlert("Oops...", "Angulo no permitido! Intentalo de nuevo.", "error");
      } else {
        var data = {
          value : item,
          id : id
        }
        HomeService.doServo(data)
        .success(function(result){
          console.log(result,'angulo');
        });
      }
    }

  }

  $scope.blurVA = function (item) {
    if (item > 180 || item < 0) {
      sweetAlert("Oops...", "Angulo no permitido! Intentalo de nuevo.", "error");
      $scope.disabled_input_confi = true;
    } else {
      $scope.disabled_input_confi = false;
    }
  }

  $scope.btnAgregarAngulos = function (item) {
    console.log(item);
    if ($scope.disabled_input_confi) {
      sweetAlert("Oops...", "Tienes un error, verifica los datos insertados.", "error");
    } else {
      // PARA SERVO 1
      $scope.g_s1i = item.s1i;
      $scope.g_s1f = item.s1f;
      // PARA SERVO 2
      $scope.g_s2i = item.s2i;
      $scope.g_s2f = item.s2f;
      // PARA SERVO 3
      $scope.g_s3i = item.s3i;
      $scope.g_s3f = item.s3f;
      // PARA SERVO 4
      $scope.g_s4i = item.s4i;
      $scope.g_s4f = item.s4f;
      // PARA SERVO 5
      $scope.g_s5i = item.s5i;
      $scope.g_s5f = item.s5f;
      swal("Todo bien!", "Se capturaron los angulos de movimiento", "success")
      $(document).ready(function() {
        $('#jh').modal('close');
      });
    }
  }

}]);
