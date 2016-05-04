define(function () {
  function mainMyCtrl1($scope) {
    $scope.onInit = function () {
    };

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
  }

  return function (module) {
    module.controller('main.myCtrl1', ['$scope', mainMyCtrl1]);
  }
});