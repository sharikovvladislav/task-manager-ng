define(['text!settings/settings.view.html', 'text!tm/views/task-manager.html'],
    function (settingsView, taskManagerView) {
      RoutesAppConfiguration.$inject = ['$stateProvider'];
      function RoutesAppConfiguration($stateProvider) {
        $stateProvider
            .state({
              name: 'tm',
              url: '/',
              controller: 'tm.list',
              template: taskManagerView
            })
            .state({
              name: 'settings',
              url: '/settings',
              controller: 'settings.ctrl',
              template: settingsView
            });
      }
      
      return function (appModule) {
        appModule
            .config(RoutesAppConfiguration);
      }
    });