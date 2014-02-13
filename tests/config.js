/**
 * Created by dpamio on 12/02/14.
 */

exports.config = {
    sauceUser: "diego_pamio",
    sauceKey: '610a8049-7d40-4e17-a381-944bf4b19898',

    capabilities: {
        'browserName': 'chrome',
        'name': process.env.CI_MESSAGE,
        'build': process.env.CI_BUILD_NUMBER + ' (' + (process.env.CI_COMMIT_ID || "N/A").substring(0, 7) + ')'
    },

    specs: ['*-spec.js'],
    verbose: true,

    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    }
};