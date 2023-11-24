import fs from 'fs';
import https from 'https';
import axios from 'axios';

export default async function handler(req, res) {
  const { totalPrice, swishMobileNumber } = await JSON.parse(req.body)
  try{
    console.log(process.cwd())
    const rootPath = process.cwd()
    function generateSwishUUID() {
        const hexChars = '0123456789ABCDEF';
        let uuid = '';
      
        for (let i = 0; i < 32; i++) {
          if (i === 12) {
            uuid += '4';
          } else if (i === 16) {
            uuid += hexChars[(Math.random() * 4) | 8];
          } else {
            uuid += hexChars[Math.floor(Math.random() * 16)];
          }
        }
      
        return uuid;
      }
      
        const agent = new https.Agent({
                cert: fs.readFileSync(`@/ssl/Merchant_SmartBoost_1232406551_20230117/myCertificate.pem`, { encoding: 'utf8' }),
                key: fs.readFileSync(`@/ssl/Merchant_SmartBoost_1232406551_20230117/myPrivateKey.key`, { encoding: 'utf8' }),
                ca: fs.readFileSync(`@/ssl/Merchant_SmartBoost_1232406551_20230117/Swish_TLS_RootCA.pem`, { encoding: 'utf8' }),
                passphrase: 'swish'            
        });

    // Using Axios as HTTP library with the custom agent
    const client = axios.create({
      httpsAgent: agent,
    });

    const instructionId = generateSwishUUID() ; // Assuming getUUID is a valid function

    // Setup the data object for the payment
    const data = {
      callbackUrl: process.env.SWISH_CALLBACK,
      payeeAlias: '1232406551',
      currency: 'SEK',
      payerAlias: swishMobileNumber,
      amount: totalPrice,
      message: 'Your Smart Boost Order'
    };

    const response = await client.put(
      `${process.env.SWISH_PAYMENT_REQUEST_ENDPONT}/${instructionId}`,
      data
    );

   
    console.log('Payment request created:', response.data);
    res.status(200).json({ message: 'Payment request created' });
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Request failed with status code', error.response.status);
      console.log('Error details:', error.response.data);

      res.status(error.response.status).json({
        error: 'Request Failed',
        details: error.response.data[0].errorMessage
      })

    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from the server');
      res.status(500).json({error: 'No response received from the server'})
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up the request:', error.message);
    }
    console.error('Full error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
