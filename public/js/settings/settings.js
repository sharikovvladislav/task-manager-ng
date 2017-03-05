define([
  'require', 'angular',
  'settings/settings.ctrl'
], function (require) {
  'use strict';
  var angular = require('angular');
  
  return angular.module('settings', ['ngRoute', 'settings.ctrl']);
});