import Link from "next/link";
import React, { useEffect } from "react";
import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const success = () => {
    const { setCartItems, setTotalPrice } = useStateContext();
    const contactMethods = [
        {
            title:'chat',
        },
        {
            title:'email',
            value: 'support@smartboost.se'
        },
        {
            title: 'Mobile',
            value: '+46700555354'
        } ]

    useEffect(() => {
      setCartItems([])
      setTotalPrice(0)
      runFireworks();
    }, []);
  return (
  <div className="h-screen">
    <div className="mt-[8rem] p-2 text-center">
        <h1 className="text-2xl">Thank You for your purchase</h1>
        <p className="mt-4">Kindly check your email for a receipt.</p>
        <p>If you have any questions don't hesitate contact us using one of the methods below:</p>
        <div className="mt-8"><Link className="p-4 border-2 bg-red-600 text-white text-xl rounded-lg" href={'/'}>Continue Shopping</Link></div>
        <div className="flex flex-col mt-4">
            {
                contactMethods.map(el => (
                    <div className="p-4 capitalize bg-blue2 text-white rounded-md mt-2 flex flex-col justify-center">
                       <h1 className="text-xl">{el.title}</h1>
                        <p className="text-sm ml-2">{el.value}</p>
                    </div>
                ))
            }
        </div>
    </div>
    
  </div>
  )

};

export default success;

