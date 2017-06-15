const _ = require('lodash');

module.exports = config => {
    let devConfig = {
        reporters: ['coverage-istanbul', 'spec'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-spec-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular/cli/plugins/karma')
        ],
        logLevel: config.LOG_INFO,
        singleRun: false,
        autoWatch: true,
    };

    config.set(_.merge(
        require('./karma.conf.json'),
        require('./karma.coverage.conf'),
        devConfig
    ));
}

