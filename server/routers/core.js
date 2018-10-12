const bodyParser = require('body-parser');

module.exports = {
    apply: function (app, socketio) {
        app.use(function(req, res, next) {
            req.rawBody = '';
            req.setEncoding('utf8');

            req.on('data', function(chunk) {
                req.rawBody += chunk;
            });

            req.on('end', function() {
                next();
            });
        });
        app.use(bodyParser.json());
    }
};
