/**
 * Created by Vlad on 29.04.2016.
 */

module.exports = function () {
  return {
    main: {
      options: {
        rules: {
          'no-debugger': 2
        }
      },
      src: ['public/js/**/*.js']
    }
  }
};