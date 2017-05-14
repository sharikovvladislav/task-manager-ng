define(
  [
    'angular',
    'window',
    'main/main',
    'common/common',
    'tm/tm',
    'settings/settings',
    'menu/menu.component'
  ],
  function(angular, window) {
    'use strict';
    var dependencies = angular.module('project.dependencies', [
      'dndLists',
      'ui.bootstrap',
      'ui.router'
    ]),
      app = angular.module('myApp', [
        'project.dependencies',
        'ngRoute',
        'common',
        'main',
        'tm',
        'settings',
        'menu.component'
      ]);

    app.init = function() {
      angular.bootstrap(window.document, ['myApp']);
    };

    app.run(['$window', function($window) {}]);

    return app;
  }
);
