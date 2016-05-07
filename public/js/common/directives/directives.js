var deps = ['angular', 'common/directives/task-type-adder', 'common/directives/validate-form'];
define(deps, function (angular, taskTypeAdder, validateForm) {
  var module = angular.module('common.directives', []);
  taskTypeAdder(module);
  validateForm(module);
});