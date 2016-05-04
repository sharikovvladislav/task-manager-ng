define(function () {
  mainMyCtrl1.$inject = ['$scope', '$uibModal', '$log'];
  function mainMyCtrl1($scope, $dialog, $log) {
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

    $scope.onAddTaskButtonClick = function () {
      var modalInstance = $dialog.open({
        animation: true,
        templateUrl: 'partials/helpers/temp-dialog.html',
        controller: 'tm.add',
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });

      modalInstance.closed.then(function (selectedItem) {
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  }

  return function (module) {
    module.controller('main.myCtrl1', mainMyCtrl1);
  }
});