define([
  'require', 'angular',
  'common/services/services', 'common/directives/directives',
  'common/controllers/controllers', 'common/factories/factories'
], function (require) {
  'use strict';

  var angular = require('angular');

  return angular.module('common', ['ngRoute', 'common.services', 'common.controllers', 'common.directives', 'common.factories']);
});