define([
  'require', 'angular',
  'tm/services/services', 'tm/directives/directives',
  'tm/controllers/controllers', 'tm/factories/factories'
], function (require) {
  'use strict';

  var angular = require('angular');

  return angular.module('tm',
    ['ngRoute', 'tm.services', 'tm.controllers', 'tm.directives', 'tm.factories']
  );
});