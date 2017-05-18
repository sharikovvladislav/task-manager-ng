var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    allTestFiles.push(file);
  }
});

var testDeps = ["angular-mocks", "ngBootstrapWithTemplates", "angularUiRouter"];
define("window", function() {
  return document.window;
});
require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: "/",

  paths: {
    angular: "lib/components/angular/angular",
    "angular-mocks": "lib/components/angular-mocks/angular-mocks",
    angularUiRouter: "lib/components/angular-ui-router/release/angular-ui-router",
    ngRoute: "lib/components/angular-route/angular-route",
    ngBootstrapWithTemplates: "lib/components/angular-bootstrap/ui-bootstrap-tpls",
    moment: "lib/components/moment/moment",
    text: "lib/components/text/text"
  },

  shim: {
    ngRoute: {
      deps: ["angular"]
    },
    angularUiRouter: {
      deps: ["angular"]
    },
    "angular-mocks": {
      deps: ["ngRoute"]
    },
    ngBootstrapWithTemplates: {
      deps: ["angular"]
    },
    angular: {
      exports: "angular"
    }
  },

  // dynamically load all test files
  deps: testDeps,

  // we have to kickoff jasmine, as it is asynchronous
  callback: function() {
    require(["app"], function() {
      require(allTestFiles, function() {
        window.__karma__.start();
      });
    });
  }
});
