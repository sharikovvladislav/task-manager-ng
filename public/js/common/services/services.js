define(['app', 'common/services/locker'], function (app, lockerService) {
  var module = angular.module('common.services', []);
  lockerService(module);
});