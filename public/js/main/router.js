/**
 * Created by Vlad on 04.05.2016.
 */

define(function () {
  return function (application) {
    application.config(['$routeProvider',
      function ($routeProvider) {
        $routeProvider
          .when('/', { templateUrl: '/partials/task-manager.html', controller: 'tm.list' })
          /*.when('/view1', { templateUrl: '/partials/view1.html', controller: 'main.myCtrl1' })*/
          .when('/task-manager', { templateUrl: '/partials/task-manager.html', controller: 'tm.list' })
          .otherwise({ redirectTo: '/' });
      }
    ]);
  }
});