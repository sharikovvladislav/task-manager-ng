/**
 * Created by Vlad on 24.04.2016.
 */
define(function() {
  return function(module) {
    module.service('common.locker', [
      function() {
        var self = this;
        self.lock = function() {};
        self.unlock = function() {};
      }
    ]);
  };
});
