/**
 * Created by dpamio on 12/02/14.
 */

require('protractor');

var sauceConnectLauncher = require('sauce-connect-launcher'),
    options = {
        username: "diego_pamio",
        userkey: '610a8049-7d40-4e17-a381-944bf4b19898',
        verbose: false,
        logfile: null, //optionally change sauce connect logfile location
        tunnelIdentifier: null, // optionally identity the tunnel for concurrent tunnels
        fastFailRexegps: null, // an array or comma-separated list of regexes whose matches will not go through the tunnel
        directDomains: null, // an array or comma-separated list of domains that will not go through the tunnel
        logger: console.log
    },
    scp;


describe('angularjs homepage', function () {

    beforeEach(function () {
        sauceConnectLauncher(options, function (err, sauceConnectProcess) {
            console.log("Started Sauce Connect Process");
            scp = sauceConnectProcess;
        });
    });


    afterEach(function () {
        scp.close(function () {
            console.log("Closed Sauce Connect process");
        });
    });

    it('should greet the named user', function() {
        // Load the AngularJS homepage.
        browser.get('http://www.angularjs.org');

        // Find the element with ng-model matching 'yourName' - this will
        // find the <input type="text" ng-model="yourName"/> element - and then
        // type 'Julie' into it.
        element(by.model('yourName')).sendKeys('Julie');

        // Find the element with binding matching 'yourName' - this will
        // find the <h1>Hello {{yourName}}!</h1> element.
        var greeting = element(by.binding('yourName'));

        // Assert that the text element has the expected value.
        // Protractor patches 'expect' to understand promises.
        expect(greeting.getText()).toEqual('Hello Julie!');
    });
});