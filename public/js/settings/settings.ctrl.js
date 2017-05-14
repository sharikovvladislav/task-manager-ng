define(function() {
  SettingsCtrl.$inject = ['$scope'];
  function SettingsCtrl($scope) {
    $scope.model = {};
    $scope.model.name = 'Мир';
  }

  return angular
    .module('settings.ctrl', [])
    .controller('settings.ctrl', SettingsCtrl);
});
