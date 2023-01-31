import React, { useEffect } from "react";
import { Search, ImageSlider, Steps, Offers, Feedbacks } from "../components";
import Script from "next/script";
// import { client } from "../lib/swishClient";

const index = () => {
//   useEffect(() => {
//     const instructionId = '989f981e-5747-43f4-8515-4df18933339c';

// // Setup the data object for the payment
// const data = {
//   payeePaymentReference: '0123456789',
//   callbackUrl: 'https://localhost:3000/success',
//   payeeAlias: '46732325233',
//   currency: 'SEK',
//   payerAlias: '4671234768',
//   amount: '100',
//   message: 'Kingston USB Flash Drive 8 GB'
// };

// client.put(
// `https://mss.cpc.getswish.net/swish-cpcapi/api/v2/paymentrequests/${instructionId}`,
//   data
// ).then((res) => {
//    console.log('Payment request created')
// }).catch(err => console.log(err.message));
//   }, []);
  
  return (
  <div>
    <Script type="text/javascript" strategy="lazyOnload">{`

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/63d96f35c2f1ac1e2030a97f/1go4lkqm2';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
`}
</Script>
    {/* <Search /> */}
    <ImageSlider />
    <Steps />
    <Offers />
    <Feedbacks />
  </div>
  )
};

export default index;
