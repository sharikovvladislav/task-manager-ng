define(['angular', 'tm/filters/time-filter'], function (angular, timeFilter) {
  var module = angular.module('tm.filters', []);
  for (var i = 1; i < arguments.length; i++) {
    arguments[i](module);
  }
});