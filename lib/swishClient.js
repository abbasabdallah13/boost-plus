// const fs = require('fs');
// const https = require('https')
// const axios = require('axios')

// // const agent = new https.Agent({
// //   cert: fs.readFileSync('./Merchant_SmartBoost_1232406551_20230117/myCertificate.pem'),
// //   key: fs.readFileSync('./Merchant_SmartBoost_1232406551_20230117/myPrivateKey.key'),
// //   ca: fs.readFileSync('./Merchant_SmartBoost_1232406551_20230117/Swish_TLS_RootCA.pem'),
// //   passphrase: 'swish'
// // });

// const axClient = axios.create({
//   httpsAgent: agent
// });

// const instructionId = '18E3F4109C2221ED87CDA800200C9A76';

// const data = {
//   payeePaymentReference: 'a146732325233',
//   callbackUrl: 'https://localhost:3000/success',
//   payeeAlias: '1232406551',
//   currency: 'SEK',
//   payerAlias: '46732325233',
//   amount: '100',
//   message: 'Kingston USB Flash Drive 8 GB'
// };

// export async function createPaymentRequest(){
//   try{
//     const response = await axClient.put(`https://staging.getswish.pub.tds.tieto.com/cpc-swish/api/v2/paymentrequests/${instructionId}`,data); 
  
//     if(response.status === 201){
//       console.log('success')
//     }
//   }catch(err){
//     console.error(err)
//   }
// }

