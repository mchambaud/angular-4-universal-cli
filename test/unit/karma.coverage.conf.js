const path = require('path');

const THRESHOLD_STATEMENTS = 95,
    THRESHOLD_BRANCHES = 95,
    THRESHOLD_FUNCTIONS = 95,
    THRESHOLD_LINES = 95;

module.exports = {
    coverageIstanbulReporter: {
        reports: ['html', 'lcovonly', 'text-summary'],
        fixWebpackSourcePaths: true,
        dir: path.join(__dirname, 'coverage'),
        'report-config': {
            html: {
                subdir: 'html'
            }
        },
        thresholds: {
            emitWarning: false,
            global: {
                statements: THRESHOLD_STATEMENTS,
                lines: THRESHOLD_LINES,
                branches: THRESHOLD_BRANCHES,
                functions: THRESHOLD_FUNCTIONS
            },
            each: {
                statements: THRESHOLD_STATEMENTS,
                lines: THRESHOLD_LINES,
                branches: THRESHOLD_BRANCHES,
                functions: THRESHOLD_FUNCTIONS
                // overrides: {
                //     'baz/component/**/*.js': {
                //         statements: 98
                //     }
                // }
            }
        }
    }
};
