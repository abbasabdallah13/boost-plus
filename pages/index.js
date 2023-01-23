import React, { useEffect } from "react";
import { Search, ImageSlider, Steps, Offers, Feedbacks } from "../components";
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
    {/* <Search /> */}
    <ImageSlider />
    <Steps />
    <Offers />
    <Feedbacks />
  </div>
  )
};

export default index;
