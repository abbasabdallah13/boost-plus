import fs from 'fs';
import https from 'https';
import axios from 'axios';


export default async function handler(req, res) {
  const { totalPrice, swishMobileNumber } = req.body
  try{
    console.log('test')
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
                // cert: fs.readFileSync(`/opt/render/project/src/ssl/Merchant_SmartBoost_1232406551_20230117/myCertificate.pem`, { encoding: 'utf8' }),
                // key: fs.readFileSync(`/opt/render/project/src/ssl/Merchant_SmartBoost_1232406551_20230117/myPrivateKey.key`, { encoding: 'utf8' }),
                // ca: fs.readFileSync(`/opt/render/project/src/ssl/Merchant_SmartBoost_1232406551_20230117/Swish_TLS_RootCA.pem`, { encoding: 'utf8' }),
                cert: fs.readFileSync(`./ssl/Merchant_SmartBoost_1232406551_20230117/myCertificate.pem`, { encoding: 'utf8' }),
                key: fs.readFileSync(`./ssl/Merchant_SmartBoost_1232406551_20230117/myPrivateKey.key`, { encoding: 'utf8' }),
                ca: fs.readFileSync(`./ssl/Merchant_SmartBoost_1232406551_20230117/Swish_TLS_RootCA.pem`, { encoding: 'utf8' }),
                passphrase: 'swish'            
        });

        // Using Axios as HTTP library with the custom agent
        const client = axios.create({
      httpsAgent: agent,
    });

    const instructionId = generateSwishUUID() ; // Assuming getUUID is a valid function
    
    // Setup the data object for the payment
    const data = {
      callbackUrl: 'https://sssmart.onrender.com/api/success',
      payeeAlias: '1232406551',
      currency: 'SEK',
      payerAlias: swishMobileNumber,
      amount: totalPrice,
      message: 'Your Boost Plus Order'
    };

    const response = await client.put(
      `${process.env.SWISH_PAYMENT_REQUEST_ENDPONT}/${instructionId}`,
      data
      );
      
      console.log('Payment request created:', response.data);
      res.status(200).json({ message: 'Payment request created' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  