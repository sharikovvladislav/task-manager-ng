define([
  'angular', 'main/main', 'common/common'
], function (angular) {
  'use strict';

  var app = angular.module('myApp', ['ngRoute', 'main', 'common']);

  app.init = function () {
    angular.bootstrap(document, ['myApp']);
  };

  app.config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider
        .when('/', { templateUrl: '/partials/main.html', controller: 'main.myCtrl' })
        .when('/view1', { templateUrl: '/partials/view1.html', controller: 'main.myCtrl1' })
        .otherwise({ redirectTo: '/' });

    }
  ]);

  app.run(['$window', function ($window) {
    // auth.setAuthorizationHeaders();
   // user.initialize();
  }]);

  return app;
});