define(function () {
  SettingsCtrl.$inject = ['$scope'];
  function SettingsCtrl ($scope) {
    $scope.a = 5;
  }
  
  return angular.module('settings.ctrl', [])
      .controller('settings.ctrl', SettingsCtrl);
});