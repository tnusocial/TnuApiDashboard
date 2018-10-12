module.exports = {
    apply: function (app, socketio) {
        socketio.on("connection", function (sock) {
            console.log(sock);

            sock.on("say", function (msg) {
                console.log(sock, msg);
            });

        });

    }
};
