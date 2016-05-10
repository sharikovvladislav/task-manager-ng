define(['angular', 'common/directives/task-type-adder', 'common/directives/validate-form'], function (angular, taskTypeAdder, validateForm) {
  var module = angular.module('common.directives', []);
  taskTypeAdder(module);
  validateForm(module);
});