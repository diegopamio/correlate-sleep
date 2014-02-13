/**
 * Created by dpamio on 12/02/14.
 */

require('protractor');

require('coffee-script');


describe('angularjs homepage', function () {

    it('should greet the named user', function () {

        sauceConnect = require('sauce-connect');

        sauceConnect.launch('diego_pamio', '610a8049-7d40-4e17-a381-944bf4b19898', function () {
            browser.get('http://localhost:3000/');
            expect(element(by.id('header'))).toEqual('My Keystone Website');
        });

    });
});