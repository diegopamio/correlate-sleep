/**
 * Created by dpamio on 07/02/14.
 */

var keystone = require('keystone');
keystone.init({

    'name': 'Correlate Sleep',

    'favicon': 'public/favicon.ico',
    'less': 'public',
    'static': 'public',

    'views': 'templates/views',
    'view engine': 'jade',

    'auto update': true,
    'mongo': process.env.MONGO_URI || 'mongodb://localhost/keystone-demo',

    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': '(your secret here)',
    'port': process.env.PORT || 8080

});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();