/**
 * Created by dpamio on 24/02/14.
 */

extend = require("node.extend");

var genericConfig = {
    framework: "mocha",
    specs: ['specs/*-spec.js'],
    mochaOpts: {
        reporter: "spec",
        slow: 3000
    }

};

var configProd = extend({
    sauceUser: "diego_pamio",
    sauceKey: '610a8049-7d40-4e17-a381-944bf4b19898',

    capabilities: {
        'browserName': 'chrome',
        'name': process.env.CI_MESSAGE || 'Ad hoc message',
        'build': process.env.CI_BUILD_NUMBER + ' (' + (process.env.CI_COMMIT_ID || "No comments.").substring(0, 7) + ')',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER
    }
}, genericConfig);

var configDev = extend({
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome',
        'name': "Development Build",
        'build': "N/A"
    },
    verbose: true,
    baseUrl: 'http://localhost:8080/'
}, genericConfig);

exports.config = process.env.NODE_ENV == "production" ? configProd : configDev;