/**
 * Created by dpamio on 14/02/14.
 */
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome',
        'name': "Development Build",
        'build': "N/A"
    },
    specs: ['*-spec.js'],
    verbose: true,

    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    }
};