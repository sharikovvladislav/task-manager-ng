define(function() {
  function HumanizeTimeFilter() {
    return function(input) {
      var hours = Math.floor(input / 60), minutes = 0, result = '';

      if (hours >= 1) {
        minutes = input - 60 * hours;
      } else {
        minutes = input;
      }

      if (hours >= 1) {
        result = hours.toString() + 'h';
      }
      if (minutes) {
        result = result + ' ' + minutes.toString() + 'm';
      }

      if (result === '') {
        result = '0m';
      }

      return result;
    };
  }

  return function(module) {
    module.filter('humanizeTime', HumanizeTimeFilter);
  };
});
