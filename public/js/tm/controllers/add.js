/**
 * Created by Vlad on 05.05.2016.
 */
define(function () {
  TaskAddCtrl.$inject = ['$scope'];
  function TaskAddCtrl ($scope) {
    $scope.model = null;
    $scope.ok = function () {
      $scope.$close('result');
    };
    $scope.cancel = function () {
      $scope.$dismiss('result');
    }
  }

  return function (module) {
    module.controller('tm.add', TaskAddCtrl);
  }
});