import cors from 'cors'

const corsMiddleware = cors({
    origin: 'https://e4d6-185-97-94-87.ngrok-free.app', // Update with the origin of your frontend
    methods: ['POST'],
    credentials: true,
  });

async function handler(req,res){
    if(req.method === 'POST'){
        const { paymentRequestObject } = req.body;

        console.log('Payment object received', paymentRequestObject)
        res.status(200).json(paymentRequestObject)
    }else{
        res.status(405).json({error: 'Method not allowed'})
    }
}

export { corsMiddleware }
export default handler