define([
  'angular', 'moment',  'main/main', 'common/common'
], function (angular, moment) {
  'use strict';

  var dependencies = angular.module('project.dependencies', ['dndLists']),
    app = angular.module('myApp', ['project.dependencies', 'ngRoute', 'common', 'main']);

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
    debugger;
    var a = moment();
  }]);

  return app;
});