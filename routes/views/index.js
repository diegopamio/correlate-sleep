/**
 * Created by dpamio on 10/02/14.
 */
var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res);

    view.render('index');

}
