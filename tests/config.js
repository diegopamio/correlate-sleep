/**
 * Created by dpamio on 12/02/14.
 */

exports.config = {
    sauceUser: "diego_pamio",
    sauceKey: '610a8049-7d40-4e17-a381-944bf4b19898',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        'name': process.env.CI_COMMIT_ID,
        'build': process.env.CI_BUILD_NUMBER
    },

    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    specs: ['*-spec.js'],
    verbose: true,

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    }
};