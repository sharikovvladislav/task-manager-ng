define(['angular'], function (angular) {
  function mainMyCtrl1 ($scope, locker) {
    debugger;
    var a = locker;
  }

  return function (module) {
    module.controller('main.myCtrl1', ['$scope', 'common.locker', mainMyCtrl1]);
  }
});