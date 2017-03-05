define([
  'require', 'angular',
  'settings/settings.ctrl',
  'settings/router.config'
], function (require) {
  'use strict';
  var angular = require('angular');
  
  return angular.module('settings', ['ngRoute', 'settings.router.config', 'settings.ctrl']);
});