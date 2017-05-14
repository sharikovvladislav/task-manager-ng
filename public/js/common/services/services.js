define(['angular', 'common/services/locker'], function(angular, lockerService) {
  var module = angular.module('common.services', []);
  lockerService(module);
});
