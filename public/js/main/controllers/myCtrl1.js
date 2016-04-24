define(['angular'], function (angular) {
  function mainMyCtrl1 ($scope, locker) {
    $scope.onInit = function () {};

    $scope.models = {
      selected: null,
      list: []
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
      $scope.models.list.push({label: "Item A" + i});
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
      $scope.modelAsJson = angular.toJson(model, true);
    }, true);
  }

  return function (module) {
    module.controller('main.myCtrl1', ['$scope', 'common.locker', mainMyCtrl1]);
  }
});