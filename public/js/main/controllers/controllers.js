define(['app', 'main/controllers/myCtrl', 'main/controllers/myCtrl1'], function (app, myCtrl, myCtrl1) {
  var module = angular.module('main.controllers', []);
  myCtrl(module);
  myCtrl1(module);
});