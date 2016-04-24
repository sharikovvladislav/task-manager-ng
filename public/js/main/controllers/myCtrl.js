define(['angular'], function (angular) {
  function mainMyCtrl ($scope) {
    $scope.onInit = function () {
      debugger;
    }
  }

  return function (module) {
    module.controller('main.myCtrl', ['$scope', mainMyCtrl]);
  };
});