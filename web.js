/**
 * Created by dpamio on 07/02/14.
 */

var keystone = require('keystone');
keystone.init({

    'name': 'My Project',

    'favicon': 'public/favicon.ico',
    'less': 'public',
    'static': 'public',

    'views': 'templates/views',
    'view engine': 'jade',

    'auto update': true,
    'mongo': 'mongodb://localhost/correlate-sleep',

    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': '(your secret here)'

});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();