define(['angular', 'tm/controllers/add', 'tm/controllers/list'], function (angular, addController, listController) {
  var module = angular.module('tm.controllers', []);
  for (var i = 1; i < arguments.length; i++) {
    arguments[i](module);
  }
});