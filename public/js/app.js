define([
  'angular', 'window', 'main/router', 'main/main', 'common/common', 'tm/tm', 'settings/settings'
], function (angular, window, routerConfigurator) {
  'use strict';

  var dependencies = angular.module('project.dependencies', ['dndLists', 'ui.bootstrap', 'ui.router']),
    app = angular.module('myApp', ['project.dependencies', 'ngRoute', 'common', 'main', 'tm', 'settings']);

  app.init = function () {
    angular.bootstrap(window.document, ['myApp']);
  };

  routerConfigurator(app);
 
  app.run(['$window', function ($window) {}]);

  return app;
});