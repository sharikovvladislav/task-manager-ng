define(function () {
  return function (application) {
    application.config(['$urlRouterProvider',
      function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
      }
    ]);
  }
});