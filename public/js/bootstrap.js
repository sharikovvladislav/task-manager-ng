require.config({
  paths: {
    'angular' : '../components/angular/angular',
    'ngResource': '../components/angular-resource/angular-resource',
    'ngRoute': '../components/angular-route/angular-route',
    'ngCookies': '../components/angular-cookies/angular-cookies',
    'ngProgressLite': '../components/ngprogress-lite/ngprogress-lite',
    'jquery': '../components/jquery/dist/jquery',
    'bootstrap-lib': '../components/bootstrap/dist/js/bootstrap',
    'ngDragAndDrop': '../components/angular-drag-and-drop-lists/angular-drag-and-drop-lists',
    'moment': '../components/moment/moment',
    'ngBootstrapWithTemplates': '../components/angular-bootstrap/ui-bootstrap-tpls',
    'app': './app'
  },
  shim: {
    ngRoute: {
      deps: ['angular']
    },
    ngResource: {
      deps: ['angular']
    },
    ngCookies: {
      deps: ['angular']
    },
    ngProgressLite: {
      deps: ['angular']
    },
    app: {
      deps: ['angular']
    },
    'bootstrap-lib': {
      deps: ['jquery']
    },
    ngDragAndDrop: {
      deps: ['angular']
    },
    ngBootstrapWithTemplates: {
      deps: ['angular', 'angular']
    },
    angular: {
      exports: 'angular'
    }
  },
  baseUrl: '/js'
});

// доп либы для ангулара
define('ngAdditional', [
  'ngResource', 'ngRoute', 'ngCookies', 'ngProgressLite', 'ngDragAndDrop', 'ngBootstrapWithTemplates'
]);
define('window', function () {
  return window;
});
require(['app', 'ngAdditional', 'bootstrap-lib'], function (app) {
  app.init();
});