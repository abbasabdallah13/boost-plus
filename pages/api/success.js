

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
