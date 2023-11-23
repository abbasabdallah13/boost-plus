import React from 'react'
import { useStateContext } from '../../context/StateContext';
import visaMasterCardImg from '../../assets/visaMaster.png';
import paypalImg from '../../assets/paypal.png';
import swishImg from '../../assets/swish.png';
import cashImg from '../../assets/cash.png';
import Image from 'next/image';
import SwishPaymentMethod from './SwishPaymentMethod';
import Pickup from './Pickup';
import getStripe from "../../lib/getStripe";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import toast from 'react-hot-toast';



const paymentMethods = [
    {
      title: 'Credit/Debit Card',
      value:'creditDebitCard',
      img: visaMasterCardImg
    },
    {
      title: 'Paypal',
      value:'paypal',
      img: paypalImg
    },
    {
      title: 'Swish',
      value:'swish',
      img: swishImg
    },
    {
      title: 'Pickup',
      value:'pickup',
      img: cashImg
    },
  ]

function PaymentMethod({ paymentMethodModal }) {

      const handlePaymentMethod = (paymentMethod) => {
        setPaymentMethod(paymentMethod);
      }

      const handleCreditDebitPayments = async () => {
        const stripe = await getStripe();
    
        const response = await fetch('/api/stripe',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cartItems)
        })
    
        if(response.statusCode === 500) return;
        
        const data = await response.json();
    
        toast.loading('Redirecting..');
    
        stripe.redirectToCheckout({sessionId: data.id});
      }

  const { cartItems, totalPrice, fullName, setFullName, paymentMethod, setPaymentMethod } = useStateContext();

  return (
    <div>
    <h1 className="text-xl font-heebo text-gray-600 mt-4">2- Payment Method</h1>
   {
        paymentMethodModal && (    
        <div className="flex flex-col">
            {
            paymentMethods.map((el,i) => (
                <>
                    <div className={`border-2 rounded-md flex p-2 ${paymentMethod === el.value && 'border-red-500'} ${i===0?'mt-4':'mt-2'} cursor-pointer`} onClick={() => handlePaymentMethod(el.title)}>
                    <label className="flex items-center" >
                        <Image src={el.img} className={`w-20 h-6 ml-2 font-zen-kaku font-semibold ${el.img === cashImg?'w-8 h-8':''}`}  alt={el.title} />
                        <p className="ml-4">{el.title}</p>  
                    </label>
                    </div>
                {
                    paymentMethod === 'Credit/Debit Card' && el.value === 'creditDebitCard' ?(
                    <div className="p-2">
                        {
                        cartItems.length > 0 ? (
                            <button className="border-2 px-2 mt-2 rounded-md" onClick={handleCreditDebitPayments}>Pay now</button>
                        ): (
                            'Cart is Empty'
                        )
                        }
                    </div>
                    ):paymentMethod === 'Paypal' && el.value === 'paypal' ? (
                    <div className="flex flex-col items-left">
                        {
                        cartItems.length > 0 ? (
                            <>
                            <PayPalScriptProvider 
                                options={
                                {
                                    'client-id': 'AXBH_ILMGyUh9ab05YY4-g0E1cTVvJUWIJ7uDlzR749gwhiQ7-mgy6Wo9HSoC5WZ_dNZMJ8SJYLdUjwQ',
                                    currency:'SEK'
                                }}>
                            <PayPalButtons 
                            className="w-40 mt-4 ml-4"
                            createOrder={(data, actions) => {
                                return actions.order
                                    .create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                value: `${totalPrice}`,
                                                currency_code: 'SEK'
                                                },
                                            },
                                        ],
                                    })
                                    .then((orderId) => {
                                        // Your code here after create the order
                                        return orderId;
                                    });
                            }}
                            onApprove={function (data, actions) {
                                return actions.order.capture().then(function () {
                                    // Your code here after capture the order
                                    router.push('/success')
                                });
                            }}
                            />
                            </PayPalScriptProvider>
                            </>
                        ):(
                            'Cart is Empty'
                        )
                        }
                    </div>
                    ):paymentMethod === 'Swish' && el.value === 'swish' ? (
                    <SwishPaymentMethod />
                    ):paymentMethod === 'Pickup' && el.value === 'pickup' ? (
                        <Pickup />
                    ):''
                }
                </>
            ))
            }
        </div>
        )
    }
</div>
  )
}

export default PaymentMethod