module.exports = function () {
  return {
    unit: {
      configFile: 'tests/unit/config/karma.conf.js',
      singleRun: true,
      reporters: ['progress']
    }
  };
};