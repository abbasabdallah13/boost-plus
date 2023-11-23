import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../context/StateContext'
import { Circles } from 'react-loader-spinner'
import io from 'socket.io-client';
import { useRouter } from 'next/router';



const SwishPaymentMethod = () => {

    const [swishMobileNumber, setSwishMobileNumber] = useState('')
    const [swishPaymentErrorMessage, setSwishPaymentErrorMessage] = useState('')
    const [paymentRequestCreated, setPaymentRequestCreated] = useState(false)
    const [loader, setLoader] = useState(false)

    const { totalPrice } = useStateContext()

    const router = useRouter();

    const payWithSwish = async() => {
        const response = await fetch('/api/swish', {
          method: 'post',
          body: JSON.stringify({
            totalPrice,
            swishMobileNumber
          })
        })

          if(!response.ok){
            const error = await response.json();
            console.log(error);
            setSwishPaymentErrorMessage(error.details);
          } else {
            const { message } = await response.json();
            if(message === "Payment request created"){
              setLoader(true)
              setPaymentRequestCreated(true)
            }
            setSwishPaymentErrorMessage('');
          }

    }

    

  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io('http://localhost:3001'); // Replace with your server URL

    // Listen for the 'paymentDetails' event
    socket.on('paymentDetails', (paymentDetails) => {
      console.log('Received payment details:', paymentDetails);
      if(paymentDetails.status === "PAID"){
        router.push('/success')
      }else if(paymentDetails.status === "DECLINED"){
        setPaymentRequestCreated(false)
        setSwishMobileNumber('')
      }
      // Handle the payment details in your Next.js component
      // Update state or perform other actions as needed
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

    return (
        <div className="flex flex-col items-center my-4 box-border">
          {
            paymentRequestCreated ? (
              <div className="flex flex-col gap-4 py-4 justify-center items-center">
                <p>A payment request has been sent to your mobile phone. Kindly make the payment or this request will be aborted.</p>
                <Circles color='red'/>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <p className='text-red-500 font-heebo'>{swishPaymentErrorMessage}</p>
                <label htmlFor='mobile number' className="font-zen-kaku font-semibold">Mobile Number</label>
                <input type='text' className="border-gray-200 border-2 m-2 p-2 rounded-md w-full" placeholder='Mobile phone number' value={swishMobileNumber} onChange={(e) => setSwishMobileNumber(e.target.value)} />
                <button className="bg-[#149AD2] rounded-lg text-white py-[3px] px-6 w-fit font-heebo hover:bg-white hover:text-[#149AD2] hover:border-2 hover:border-[#149AD2] duration-300" onClick={() => payWithSwish()}>Pay with Swish</button>
              </div>
            )
          }

        </div>
    )
}

export default SwishPaymentMethod