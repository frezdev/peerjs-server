const {PeerServer} = require('peer')

const PORT = process.env.PORT ?? 9001
PeerServer({ port: PORT, path: "/" });