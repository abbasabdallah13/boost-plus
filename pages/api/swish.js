import fs from 'fs';
import https from 'https';
import axios from 'axios';
const path = require('path');


export default async function handler(req, res) {
  const { totalPrice, swishMobileNumber } = req.body
  try{


// Specify the path to the folder you want to inspect
const folderPath1 = '/opt/render/project/src/ssl/Getswish_Test_Certificates';
const folderPath2 = '/var/task';


// const directoryPath = path.join(__dirname, './');
// console.log(directoryPath)

// // Read the contents of the folder
fs.readdir(folderPath1, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
  } else {
    console.log(`Contents of ${folderPath1}:`);
    files.forEach((file, index) => {
      console.log(`${index + 1}. ${file}`);
    });
  }
});

// // console.log(__dirname)

// fs.readdir(folderPath2, (err, files) => {
//   if (err) {
//     console.error('Error reading folder:', err);
//   } else {
//     console.log(`Contents of ${folderPath2}:`);
//     files.forEach((file, index) => {
//       console.log(`${index + 1}. ${file}`);
//     });
//   }
// });

// fs.readdir(directoryPath, (err, files) => {
//   if (err) {
//     console.error('Error reading folder:', err);
//   } else {
//     console.log(`Contents of ${directoryPath}:`);
//     files.forEach((file, index) => {
//       console.log(`${index + 1}. ${file}`);
//     });
//   }
// });

// fs.readdir(folderPath1, (err, files) => {
//   if (err) {
//     console.error('Error reading folder:', err);
//   } else {
//     console.log(`Contents of ${folderPath1}:`);
//     files.forEach((file, index) => {
//       console.log(`${index + 1}. ${file}`);
//     });
//   }
// });

// fs.readdir(folderPath4, (err, files) => {
//   if (err) {
//     console.error('Error reading folder:', err);
//   } else {
//     console.log(`Contents of ${folderPath4}:`);
//     files.forEach((file, index) => {
//       console.log(`${index + 1}. ${file}`);
//     });
//   }
// });


    // const certificatePath = path.join(__dirname, '../../../../ssl/Getswish_Test_Certificates/Swish_Merchant_TestCertificate_1234679304.pem')
    // fs.readFile(certificatePath, 'utf8', (err, data) => {
    //   if (err) {
    //     console.error('Error reading certificate file:', err);
    //   } else {
    //     console.log('Certificate Content:', data);
    //   }
    // });
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

    //   const pathToSSL = path.join(__dirname,'../../../../ssl/Getswish_Test_Certificates')
      
      const agent = new https.Agent({
                cert: fs.readFileSync(`/opt/render/project/src/ssl/Getswish_Test_Certificates/Swish_Merchant_TestCertificate_1234679304.pem`, { encoding: 'utf8' }),
                key: fs.readFileSync(`/opt/render/project/src/ssl/Getswish_Test_Certificates/Swish_Merchant_TestCertificate_1234679304.key`, { encoding: 'utf8' }),
                ca: fs.readFileSync(`/opt/render/project/src/ssl/Getswish_Test_Certificates/Swish_TLS_RootCA.pem`, { encoding: 'utf8' }),
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
      console.error(error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  