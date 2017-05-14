define(['text!menu/menu.html'], function(menuTemplate) {
  'use strict';
  var angular = require('angular');

  MenuComponentCtrl.$inject = ['$scope'];
  function MenuComponentCtrl($scope) {
    $scope.model = {};
    $scope.model.projectName = 'abc';

    $scope.model.leftMenu = [{ label: 'Task manager', sref: 'tm' }];

    $scope.model.rightMenu = [{ label: 'Settings', sref: 'settings' }];
  }

  return angular.module('menu.component', []).component('menuComponent', {
    controller: MenuComponentCtrl,
    template: menuTemplate
  });
});
