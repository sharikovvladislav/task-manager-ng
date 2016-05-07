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
        code: 'today',
        items: [
          {
            label: 'Рассчитать количество возможных вариантов исхода вселенной',
            duration: '30',
            type: 'A'
          },
          {
            label: 'Найти виновата в проблеме с ежиками',
            duration: '120',
            type: 'B'
          },
          {
            label: 'Погуглить ту смешную фразу',
            duration: '45',
            type: 'D'
          },
          {
            label: 'Поинтересоваться у крокодилов сколько времени',
            duration: '15',
            type: 'A'
          },
          {
            label: 'Помочь еноту с решением математических задач',
            duration: '60',
            type: 'C'
          }
        ]
      }, {
        name: 'Backlog',
        code: 'backlog',
        items: []
      }]
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
      $scope.model.lists[1].items.push({
        label: "Task Backlog #" + i,
        type: 'B'
      });
    }

    $scope.onAddTaskButtonClick = function (typeOfList) {
      var modalInstance = $dialog.open({
        templateUrl: 'partials/dialogs/add-task.html',
        controller: 'tm.add'
      });

      modalInstance.result.then(function (newTask) {
        $scope.model.lists[typeOfList === 'backlog' ? 1 : 0].items.push(newTask);
      });
    };
  }

  return function (module) {
    module.controller('tm.list', TaskListCtrl);
  }
});