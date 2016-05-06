/**
 * Created by Vlad on 05.05.2016.
 */
define(function () {
  TaskAddCtrl.$inject = ['$scope'];
  function TaskAddCtrl ($scope) {
    $scope.model = {
      label: '',
      type: 'B',
      duration: ''
    };

    $scope.ok = function () {
      debugger;
      if (getFormCtrl().$valid) {
        $scope.$close($scope.model);
      }
    };
    $scope.cancel = function () {
      $scope.$dismiss();
    };

    function getFormCtrl () {
      return $scope.AddTaskForm;
    }
  }

  return function (module) {
    module.controller('tm.add', TaskAddCtrl);
  }
});