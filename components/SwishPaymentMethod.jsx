import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context/StateContext'
import { Circles } from 'react-loader-spinner'
import io from 'socket.io-client';



const SwishPaymentMethod = () => {
    const socket = io('https://swish-success-server-honeycoded.vercel.app/'); // Replace with your actual backend URL

    const [swishMobileNumber, setSwishMobileNumber] = useState('')
    const [swishPaymentErrorMessage, setSwishPaymentErrorMessage] = useState('')
    const [paymentRequestCreated, setPaymentRequestCreated] = useState(false)
    const [loader, setLoader] = useState(false)

    const { fullName, totalPrice } = useStateContext()

    const payWithSwish = async() => {
        const response = await fetch('/api/swish', {
          method: 'post',
          body: JSON.stringify({
            totalPrice,
            swishMobileNumber
          })
        }).then(response => {
          if(!response.ok){
            response.json().then(error => {
              console.log(error)
              setSwishPaymentErrorMessage(error.details)
            })
          }
        }).then(data => {
          setSwishPaymentErrorMessage('')
          setPaymentRequestCreated(true)
        })
    }

    useEffect(() => {
      socket.on("connect", () => {
        console.log('Web socket session established')
      })

      socket.on("responseEvent", data => {
        console.log(data)
      })

      return () => {
        socket.disconnect()
      }
    }, []);

    const sendSocketEvent = () => {
      socket.emit('myevent', 'Hello, Server!')
  }
  
    

    return (
        <div className="flex flex-col">
          {
            loader && 
              <Circles />
          }
            <input type='text' placeholder='Enter your mobile number' value={swishMobileNumber} onChange={(e) => setSwishMobileNumber(e.target.value)} />
            <button onClick={() => payWithSwish()}>Pay with Swish</button>
            <p className='text-red-500'>{swishPaymentErrorMessage}</p>
            <button className="border-2" onClick={() => sendSocketEvent()}>Button Socket</button>    

        </div>
    )
}

export default SwishPaymentMethod