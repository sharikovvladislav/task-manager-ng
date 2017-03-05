define(['settings/settings.ctrl', 'text!settings/settings.view.html'], function (ctrl, view) {
  return angular.module('settings.router.config', ['ui.router', 'settings.ctrl'])
      .config(function ($stateProvider) {
        $stateProvider.state({
          name: 'settings',
          url: '/settings',
          controller: 'settings.ctrl',
          template: view
        });
      });
});