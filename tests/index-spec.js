/**
 * Created by dpamio on 12/02/14.
 */

require('protractor');

require('coffee-script');


describe('angularjs homepage', function () {
    "use strict";
    var readyToTest = false;

    it('should greet the named user', function () {

        var sauceConnect = require('sauce-connect');

        runs(function () {
            sauceConnect.launch('diego_pamio', '610a8049-7d40-4e17-a381-944bf4b19898', function () {
                readyToTest = true;
            });

        });
        waitsFor(function () {
            return readyToTest;
        }, "Not able to execute sauce-connect", 80000);

        runs(function () {
            browser.get('http://localhost/');
            expect(element(by.id('header'))).toEqual('My Keystone Website');
        });
    });
});