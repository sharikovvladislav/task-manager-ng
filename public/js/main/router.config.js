define(['text!main/main.html'], function (view) {
  return function (module) {
    module.config(function ($stateProvider, $urlRouterProvider) {
      debugger;
      $stateProvider.state({
        name: 'main',
        url: '/',
        template: view
      });
      $urlRouterProvider.otherwise('/tm');
    });
  }
});