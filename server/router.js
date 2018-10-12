function apply(app, socketio) {
    require('./Routers/core').apply(app, socketio);
    require('./Routers/api').apply(app, socketio);
    require('./Routers/socketio').apply(app, socketio);
}

module.exports = {
    apply: apply
};
