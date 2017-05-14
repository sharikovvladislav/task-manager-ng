/**
 * Created by Vlad on 24.04.2016.
 */
define(['moment'], function(moment) {
  return function(module) {
    module.factory('common.moment', [
      function() {
        return moment;
      }
    ]);
  };
});
