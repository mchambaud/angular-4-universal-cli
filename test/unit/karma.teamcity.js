let _ = require('lodash');

module.exports = config => {
    let teamcityConfig = {
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-teamcity-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular/cli/plugins/karma')
        ],
        reporters: ['coverage-istanbul', 'teamcity'],
        logLevel: config.LOG_INFO
    };

    config.set(_.merge(
        require('./karma.conf.json'),
        require('./karma.coverage.conf'),
        teamcityConfig
    ));
};
