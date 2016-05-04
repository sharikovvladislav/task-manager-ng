define(['angular', 'tm/controllers/add', 'tm/controllers/list'], function (angular, addController, listController) {
  var module = angular.module('tm.controllers', []);
  addController(module);
  listController(module);
});