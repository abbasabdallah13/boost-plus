import Link from "next/link";
import React, { useEffect } from "react";
import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";
import { client } from "../lib/client";
import Script from "next/script";

const success = () => {
    const { cartItems, setCartItems, totalPrice, setTotalPrice, paymentMethod, setPaymentMethod, userDetails, setUserDetails, pickupDateAndTime, setPickupDateAndTime } = useStateContext();
    const contactMethods = [
        {
            title:'chat',
            href: "javascript:void(Tawk_API.toggle())"
        },
        {
            title:'email',
            value: 'support@boostplus.se'
        },
        {
            title: 'Mobile',
            value: '+46700555354',
            href: "tel://0700333433"
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
            newArr.map(el => client.create(el))
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
    <Script type="text/javascript" strategy="lazyOnload">{`
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/63d96f35c2f1ac1e2030a97f/1go4lkqm2';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_API.customStyle = {
        zIndex : 950 
        };
        })();
        `}
    </Script>
    <div className="mt-[8rem] p-2 text-center flex flex-col justify-around">
        <div>
            <h1 className="text-2xl font-zen-kaku font-semibold">Thank You for your purchase</h1>
            <p className="font-heebo mt-2">Kindly check your email for a receipt.</p>
            <div className="h-20 mt-8"><Link className="p-2 bg-red-600 text-white text-xl rounded-lg font-zen-kaku font-semibold hover:border-2 hover:border-red-600 hover:bg-white hover:text-red-600 duration-300" href={'/'}>Continue Shopping</Link></div>
        </div>
        <div>
            <p className="font-heebo">For further assistance, please reach out to our support team using one of the methods below</p>
            <div className="flex flex-col items-center">
                {
                    contactMethods?.map(el => (
                      <>
                      {
                        el.title === "email" ? (
                        <div 
                          className="bg-blue2 text-white rounded-md mt-2 flex flex-col justify-center w-3/4 max-w-[225px] py-2 cursor-pointer hover:border-2 hover:border-blue2 hover:bg-white hover:text-blue2 duration-300"
                          onClick={() => window.location.href = "mailto:support@boostplus.se"}
                        >
                            <h1 className="text-xl font-zen-kaku font-semibold">{el.title}</h1>
                            <p className="text-sm ml-2 font-heebo">{el.value}</p>
                        </div>
                        ) : (
                        <a 
                          className="capitalize bg-blue2 text-white rounded-md mt-2 flex flex-col justify-center w-3/4 max-w-[225px] py-2 cursor-pointer hover:border-2 hover:border-blue2 hover:bg-white hover:text-blue2 duration-300"
                          href={el.href}
                        >
                            <h1 className="text-xl font-zen-kaku font-semibold">{el.title}</h1>
                            <p className="text-sm ml-2 font-heebo">{el.value}</p>
                        </a>
                        )
                      }
                      </>
                        
                    ))
                }
            </div>
        </div>
    </div>
    
  </div>
  )

};

export default success;

