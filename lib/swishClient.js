import fs from 'fs';
const https = require('https');
const axios = require('axios');

// Using Axios as HTTP library
export const client = axios.create({
  httpsAgent: agent
});

export async function getStaticProps() {
    const agent = new https.Agent({
        cert: fs.readFileSync('../Getswish_Test_Certificates/Swish_Merchant_TestCertificate_1234679304.pem'),
        key: fs.readFileSync('../Getswish_Test_Certificates/Swish_Merchant_TestSigningCertificate_1234679304.pem'),
        ca: fs.readFileSync('../Getswish_Test_Certificates/Swish_TLS_RootCA.pem'),
      });
  }