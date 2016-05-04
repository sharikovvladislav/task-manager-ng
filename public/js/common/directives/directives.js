define(['angular', 'common/directives/task-type-adder'], function (angular, taskTypeAdder) {
  var module = angular.module('common.directives', []);
  taskTypeAdder(module);
});