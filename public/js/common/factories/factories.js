define(['angular', 'common/factories/moment'], function (angular, momentFactory) {
  var module = angular.module('common.factories', []);
  momentFactory(module);
});