import { ExpressPeerServer } from 'peer';
import express from "express";
import cors from "cors";

import http from "http";

const app = express();

app.use(cors());

const server = http.createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world!");
});

const PORT = process.env.PORT || 9000;

app.use(express.static("public"));

// Configuración del servidor PeerJS
const peerServer = ExpressPeerServer(server, {
  allow_discovery: true,
});

// Manejar eventos importantes
peerServer.on('connection', (client) => {
  console.log(`Cliente conectado, ID: ${client.getId()}`);
});

peerServer.on('disconnect', (client) => {
  console.log(`Cliente desconectado, ID: ${client.getId()}`);
});

app.use("/peer", peerServer);

server.listen(PORT, () => {
  console.log(`PeerJS server running on port ${PORT}`);
});