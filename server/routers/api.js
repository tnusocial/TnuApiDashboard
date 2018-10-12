const index = require('../api/index');

module.exports = {
    apply: function (app, socketio) {
        app.post("/api/", index.index);
    }
};
