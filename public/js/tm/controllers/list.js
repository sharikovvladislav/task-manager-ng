/**
 * Created by Vlad on 05.05.2016.
 */

define(function () {
  TaskListCtrl.$inject = ['$scope', '$uibModal', '$log'];
  function TaskListCtrl($scope, $dialog, $log) {
    var self = this;

    $scope.onInit = function () {};

    $scope.model = {
      selected: null,
      lists: [{
        name: 'Today',
        summaryTime: null,
        items: [
          {
            label: 'Рассчитать количество возможных вариантов исхода вселенной',
            duration: 30,
            type: 'A'
          },
          {
            label: 'Найти виновата в проблеме с ежиками',
            duration: 120,
            type: 'B'
          },
          {
            label: 'Погуглить ту смешную фразу',
            duration: 45,
            type: 'D'
          },
          {
            label: 'Поинтересоваться у крокодилов сколько времени',
            duration: 15,
            type: 'A'
          },
          {
            label: 'Помочь еноту с решением математических задач',
            duration: 60,
            type: 'C'
          }
        ]
      }, {
        name: 'Backlog',
        summaryTime: null,
        items: []
      }]
    };

    $scope.$watch('model.lists[0].items', function (newList) {
      $scope.model.lists[0].summaryTime = self.getSummaryTimeOfList(newList);;
    }, true);

    $scope.$watch('model.lists[1].items', function (newList) {
      $scope.model.lists[1].summaryTime = self.getSummaryTimeOfList(newList);;
    }, true);

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
      $scope.model.lists[1].items.push({
        label: "Task Backlog #" + i,
        type: 'B'
      });
    }

    $scope.onAddTaskButtonClick = function (list) {
      var modalInstance = $dialog.open({
        templateUrl: 'partials/dialogs/add-task.html',
        controller: 'tm.add'
      });

      modalInstance.result.then(function (newTask) {
        list.push(newTask);
      });
    };

    self.getSummaryTimeOfList = function (list) {
      var summaryTime = 0;

      for (var i = 0; i < list.length; i++) {
        summaryTime += list[i].duration || 0;
      }

      return summaryTime;
    };
  }

  return function (module) {
    module.controller('tm.list', TaskListCtrl);
  }
});