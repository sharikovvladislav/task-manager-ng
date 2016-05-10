/**
 * Created by Vlad on 29.04.2016.
 */

module.exports = function () {
  return {
    main: {
      options: {
        rules: {
          'no-debugger': 2,
          'indent': [2, 2, {
            SwitchCase: 1
          }],
          'max-len': [2, 120, 4, {
            ignoreComments: true,
            ignoreUrls: true
          }]
        }
      },
      src: ['public/js/**/*.js']
    }
  }
};