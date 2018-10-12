const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const consola = require('consola');

const {
  Nuxt,
  Builder
} = require('nuxt');

const app = express();
const server = http.Server(app);
const sio = socketio(server);

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

app.set('port', port);

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config);

    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    }

    // Give nuxt middleware to express
    app.use(nuxt.render);

    // Begin apply router table
    require('./router').apply(app, sio);
    // End apple router table

    // Listen the server
    server.listen(port, function () {
        consola.ready({
            message: `Server listening on http://${host}:${port}`,
            badge: true
        });
    });
}
start()
