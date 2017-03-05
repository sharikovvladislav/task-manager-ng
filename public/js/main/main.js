define([
  'main/router.config'
], function () {
  'use strict';

  var angular = require('angular'),
      module = angular.module('main', ['ngRoute']);

  for (var i = 0; i < arguments.length; i++) {
    if (angular.isFunction(arguments[i])) {
      arguments[i](module);
    }
  }
  
  return module;
});