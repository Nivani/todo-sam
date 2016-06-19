// Karma configuration
// Generated on Sun Jun 19 2016 18:28:49 GMT+0200 (Romance Summer Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: "",


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ["systemjs", "jasmine"],


        // list of files / patterns to load in the browser
        files: [
            "output/**/*.spec.js",
            {pattern: "output/**/*.js.map", included: false},
            {pattern: "ts/**/*.ts", included: false},
            {pattern: "node_modules/**/*", included: false, watched: false}
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: "dots", "progress"
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ["progress"],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ["Chrome"],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        systemjs: {
            // Path to your SystemJS configuration file
            configFile: "system.conf.js",

            // Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries.
            serveFiles: [
                "output/**/*.js"
            ]
        }
    })
};
