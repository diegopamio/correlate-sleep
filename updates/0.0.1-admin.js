/**
 * Created by dpamio on 10/02/14.
 */
var keystone = require('keystone'),
    User = keystone.list('User');

exports = module.exports = function(done) {

    new User.model({
        name: { first: 'Admin', last: 'User' },
        email: 'diego.pamio@gmail.com',
        password: 'admin',
        canAccessKeystone: true
    }).save(done);

};