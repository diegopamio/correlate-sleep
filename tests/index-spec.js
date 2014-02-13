/**
 * Created by dpamio on 12/02/14.
 */

require('protractor');

require('coffee-script');

//sauceConnect = require('sauce-connect');
//
//sauceConnect.launch('diego_pamio', '610a8049-7d40-4e17-a381-944bf4b19898', function () {
//    console.log("READY TO START TESTS");
//
//});

describe('angularjs homepage', function () {

    it('should greet the named user', function () {
        // Load the AngularJS homepage.
        browser.get('http://localhost:3000/');

        // Find the element with ng-model matching 'yourName' - this will
        // find the <input type="text" ng-model="yourName"/> element - and then
        // type 'Julie' into it.
        expect(element(by.id('header'))).toEqual('My Keystone Website');

    });
});