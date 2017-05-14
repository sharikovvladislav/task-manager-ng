define(['text!main/main.html'], function(mainTemplate) {
  return function(module) {
    module.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider.state({
        name: 'main',
        url: '/',
        template: mainTemplate
      });
      $urlRouterProvider.otherwise('/tm');
    });
  };
});
