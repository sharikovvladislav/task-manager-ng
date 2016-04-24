define(['angular'], function (angular) {
  function mainMyCtrl ($scope) {

  }

  return function (module) {
    module.controller('main.myCtrl', ['$scope', mainMyCtrl]);
  };
});