const axios = require('axios')
const { createServer } = require('http')
const { Server } = require('socket.io')

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ["GET","POST"]
    }
})

httpServer.on('upgrade', (request, socket, head) => {
    io.handleUpgrade(request, socket, head);
  });
  
  // This line is crucial - handle connections on the original Next.js API route
  io.on('connection', (socket) => {
    console.log('Socket.IO connection established');
  })


export default async function handler (req,res){
    if(req.method === 'POST'){
        const paymentRequestObject = req.body;
        console.log('Received Swish callback', paymentRequestObject)


    } else {
        res.status(405).json({ error: 'Method not allowed'})
    } 
}

