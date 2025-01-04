import { PeerServer } from 'peer';

// Configuración del servidor PeerJS
const peerServer = PeerServer({
  port: 9000, // Puerto para PeerJS
  path: '/peerjs', // Ruta del servidor PeerJS
  // ssl: {
  //   key: '/etc/ssl/private/your-private-key.key', // Ruta a tu clave privada SSL
  //   cert: '/etc/ssl/certs/your-certificate.crt', // Ruta a tu certificado SSL
  // },
});

// Manejar eventos importantes
peerServer.on('connection', (client) => {
  console.log(`Cliente conectado, ID: ${client.getId()}`);
});

peerServer.on('disconnect', (client) => {
  console.log(`Cliente desconectado, ID: ${client.getId()}`);
});
