define(['tm/controllers/controllers', 'text!tm/views/task-manager.html'], function (ctrl, view) {
  return angular.module('settings.router.config', ['ui.router', 'tm.controllers'])
      .config(function ($stateProvider) {
        $stateProvider.state({
          name: 'tm',
          url: '/',
          controller: 'tm.list',
          template: view
        });
      });
});