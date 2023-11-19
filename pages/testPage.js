import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'


const testPage = () => {
    // const socket = io('http://192.168.0.109:5000')

    const [buttonContent, setButtonContent] = useState('Send Socket Event')

    useEffect(() => {
      socket.on("connect", () => {
        console.log('Web socket session established')
      })

      socket.on("responseEvent", (data) => {
        console.log(data)
        setButtonContent(data)
      })

      return () => {
        socket.disconnect()
      }
    }, [])

    const sendSocketEvent = () => {
        socket.emit('myevent', 'Hello, Server!')
    }
    
  return (
    <div className="h-screen flex flex-col items-center justify-center">
        testPage
        <button className="border-2" onClick={() => sendSocketEvent()}>{buttonContent}</button>    
    </div>
  )
}

export default testPage