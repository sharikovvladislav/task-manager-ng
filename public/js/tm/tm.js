define([
  'tm/add.controller', 'tm/humanizeTime.filter', 'tm/list.controller', 'tm/router.config'
], function () {
  'use strict';

  var angular = require('angular'),
      module = angular.module('tm',
          ['ngRoute', 'ui.bootstrap', 'tm.router.config']
      );

  for (var i = 0; i < arguments.length; i++) {
    if (angular.isFunction(arguments[i])) {
      arguments[i](module);
    }
  }
      
  return module;
});