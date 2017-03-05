define(['text!tm/task-manager.view.html'], function (view) {
  return angular.module('tm.router.config', ['ui.router'])
      .config(function ($stateProvider) {
        $stateProvider.state({
          name: 'main.tm',
          url: 'tm',
          controller: 'tm.list',
          template: view
        });
      });
});