// import { Server } from 'socket.io'

// const initializeSocket = (httpServer) => {
//     const io = new Server(httpServer)

//     // io.on('connection', socket => {
//     //     socket.on('frontendMsg', msg => {
//     //       console.log(msg)
//     //       // const currentListeners = io.listeners('request').length;
//     //       socket.emit('serverMsg', 'Hello from Server')
//     //       // socket.emit('serverMsg',currentListeners)
          
//     //   })
//     // })


//     return io;
// }


// let ioInstance;

// const SocketHandler = (req, res) => {
//   if (ioInstance) {
//     console.log('Socket is already running')
//   } else {
//     console.log('Socket is initializing')
//     ioInstance = initializeSocket(res.socket.server)
//   }

//   ioInstance.on('frontendMsg', msg => {
//           ioInstance.emit('serverMsg', 'Hello from Server')
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const paymentDetails = req.body;

      console.log('Received payment details:', paymentDetails);

      // Send payment details to connected clients
      io.emit('swishObject', paymentDetails);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error handling Swish webhook:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
