/**
 * Created by Vlad on 04.05.2016.
 */
define(function() {
  return function(module) {
    module.directive('preValidate', [
      function() {
        return {
          restrict: 'A',
          link: function(scope, elem) {
            // set up event handler on the form element
            elem.on('submit', function() {
              // find the first invalid element
              var firstInvalid = elem.find('.ng-invalid:first');

              // if we find one, set focus
              if (firstInvalid) {
                firstInvalid.focus();
              }
            });
          }
        };
      }
    ]);
  };
});
