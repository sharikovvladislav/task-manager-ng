/**
 * Created by Vlad on 05.05.2016.
 */

define(function () {
  TaskListCtrl.$inject = ['$scope', '$uibModal', '$log'];
  function TaskListCtrl($scope, $dialog, $log) {
    $scope.onInit = function () {};

    $scope.model = {
      selected: null,
      lists: [{
        name: 'Today',
        items: []
      }, {
        name: 'Backlog',
        items: []
      }]
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
      $scope.model.lists[0].items.push({
        label: "Task Today #" + i,
        type: 'A'
      });
      $scope.model.lists[1].items.push({
        label: "Task Backlog #" + i,
        type: 'B'
      });
    }

    $scope.onAddTaskButtonClick = function () {
      var modalInstance = $dialog.open({
        templateUrl: 'partials/dialogs/add-task.html',
        controller: 'tm.add'
      });

      modalInstance.result.then(function (newTask) {
        $scope.model.lists[0].items.push(newTask);
      });
    };
  }

  return function (module) {
    module.controller('tm.list', TaskListCtrl);
  }
});