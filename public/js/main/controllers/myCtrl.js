define(['angular'], function (angular) {
  function mainMyCtrl ($scope) {
    $scope.onInit = function () {
    }
  }

  return function (module) {
    module.controller('main.myCtrl', ['$scope', mainMyCtrl]);
  };
});