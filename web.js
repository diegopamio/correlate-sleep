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
    'mongo': 'mongodb://system:system@ds033059.mongolab.com:33059/heroku_app21984206',

    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': '(your secret here)'

});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();