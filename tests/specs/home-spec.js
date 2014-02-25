/**
 * Created by dpamio on 24/02/14.
 */

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('homepage', function() {
    it('should have a hello world', function() {
        browser.get('http://localhost:1337/');
        var greeting = element(by.id('title'));
        expect(greeting.getText()).to.eventually.equal("Hello World");
    });
});