define(['angular', 'tm/controllers/add'], function (angular, addController) {
  var module = angular.module('tm.controllers', []);
  addController(module);
});