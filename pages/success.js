import Link from "next/link";
import React, { useEffect } from "react";
import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";
import { client } from "../lib/client";

const success = () => {
    const { cartItems, setCartItems, totalPrice, setTotalPrice, paymentMethod, setPaymentMethod, userDetails, setUserDetails, pickupDateAndTime, setPickupDateAndTime } = useStateContext();
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
        const sendOrderToDb = () => {
            let newArr = cartItems.map(el => {
              return {
                _type: 'links',
                fullName: `${userDetails.firstName} ${userDetails.lastName}`,
                voucher: el.fromSelect.split(',')[0] + " " + el.voucherName,
                paymentMethod: paymentMethod.toUpperCase(),
                pickupTime: pickupDateAndTime ? pickupDateAndTime : 'n/a'  ,
                link: el.url,
                purchaseDate: new Date().toString(),
                status: 'pending'
              }
            });
            newArr?.map(el => client.create(el))
          }

        const sendReceipt = async() => {
            await fetch('/api/sendReceipt', {
              method: "POST",
              body: JSON.stringify({paymentMethod, totalPrice, userDetails, cartItems, pickupDateAndTime})
            })
          }

        sendOrderToDb();
        sendReceipt();        
        setCartItems([]);
        setTotalPrice(0);
        setPaymentMethod('');
        setPickupDateAndTime('n/a')
        runFireworks();
        setUserDetails({})
    }, []);


  return (
  <div className="h-fit min-h-[70vh]">
    <div className="mt-[8rem] p-2 text-center flex flex-col justify-around">
        <div>
            <h1 className="text-2xl font-zen-kaku font-semibold">Thank You for your purchase</h1>
            <p className="font-heebo mt-2">Kindly check your email for a receipt.</p>
            <div className="h-20 mt-8"><Link className="p-2 bg-red-600 text-white text-xl rounded-lg font-zen-kaku font-semibold" href={'/'}>Continue Shopping</Link></div>
        </div>
        <div>
            <p className="font-heebo">For further assistance, please reach out to our support team using one of the methods below</p>
            <div className="flex flex-col items-center">
                {
                    contactMethods?.map(el => (
                        <div className="capitalize bg-blue2 text-white rounded-md mt-2 flex flex-col justify-center w-3/4 max-w-[225px] py-2">
                        <h1 className="text-xl font-zen-kaku font-semibold">{el.title}</h1>
                            <p className="text-sm ml-2 font-heebo">{el.value}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    
  </div>
  )

};

export default success;

