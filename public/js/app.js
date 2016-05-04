define([
  'angular', 'window', 'main/router', 'main/main', 'common/common'
], function (angular, window, routerConfigurator) {
  'use strict';

  var dependencies = angular.module('project.dependencies', ['dndLists']),
    app = angular.module('myApp', ['project.dependencies', 'ngRoute', 'common', 'main']);

  app.init = function () {
    angular.bootstrap(window.document, ['myApp']);
  };

  routerConfigurator(app);

  app.run(['$window', function ($window) {}]);

  return app;
});