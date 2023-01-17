import React, { useEffect,useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import { client } from "../lib/client";
import { useStateContext } from "../context/StateContext";
import Image from "next/image";

import instaLikesImg from '../assets/likes.png';
import followersImg from '../assets/followers.png';
import commentsImg from '../assets/comments.png';
import viewsImg from '../assets/views.png';

import fbLikesImg from '../assets/fbLike.png';
import fbCommentsImg from '../assets/fbComment.png';
import fbPageLikesImg from '../assets/fbPage.png';

import tiktokCommentsImg from '../assets/tiktokComments.png'
import tiktokLikesImg from '../assets/tiktokLikes.png'
import tiktokSharesImg from '../assets/tiktokShares.png'
import tiktokViewsImg from '../assets/tiktokViews.png'

import youtubeCommentsImg from '../assets/youtubeComments.png'
import youtubeLikesImg from '../assets/youtubeLikes.png'
import youtubeSubscribersImg from '../assets/youtubeSubscribers.png'
import youtubeViewsImg from '../assets/youtubeViews.png'

import twitterLikesImg from '../assets/twitterLikes.png';
import twitterFollowersImg from '../assets/twitterFollowers.png';

import visaMasterCardImg from '../assets/visaMaster.png';
import paypalImg from '../assets/paypal.png';
import swishImg from '../assets/swish.png';
import cashImg from '../assets/cash.png';

import getStripe from "../lib/getStripe";
import { toast } from "react-hot-toast";

const Checkout = () => {
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
      title: 'Cash In Store',
      value:'cash',
      img: cashImg
    },
  ]
  const { cartItems, totalPrice } = useStateContext();
  
  const [paymentMethod, setPaymentMethod] = useState('');
  
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

      const handlePaymentMethod = (e) => {
        setPaymentMethod(e.target.value);
      }
      
  return (
  <div className="mt-28 p-4">
    {/* order details section */}
    <div className="border-b-2 border-black">
      <h1 className="text-center text-4xl">Your Order</h1>
      <div className="overflow-y-scroll max-h-96">
        {cartItems.map(el => (
          <div className="flex items-center border-2 rounded-lg p-2 mt-4 overflow-x-scroll hidden-scrollbar">
            <Image className="h-16 w-16 " src={el.voucherCode === 'instaLikes' ? instaLikesImg : el.voucherCode === 'instaFollowers' ? followersImg : el.voucherCode === 'instaComments' ? commentsImg : el.voucherCode === 'instaViews' ? viewsImg : el.voucherCode === 'fbLikes' ? fbLikesImg : el.voucherCode === 'fbComments' ? fbCommentsImg : el.voucherCode === 'fbPageLikes' ? fbPageLikesImg : el.voucherCode === 'youtubeLikes' ? youtubeLikesImg : el.voucherCode === 'youtubeComments' ? youtubeCommentsImg : el.voucherCode === 'youtubeViews' ? youtubeViewsImg : el.voucherCode === 'youtubeSubscribers' ? youtubeSubscribersImg : el.voucherCode === 'tiktokComments' ? tiktokCommentsImg : el.voucherCode === 'tiktokLikes' ? tiktokLikesImg : el.voucherCode === 'tiktokShares' ? tiktokSharesImg : el.voucherCode === 'tiktokViews' ? tiktokViewsImg : el.voucherCode === 'twitterLikes' ? twitterLikesImg : el.voucherCode === 'twitterFollowers' ? twitterFollowersImg : ''}  alt='voucher' />
            <div className="p-2 flex flex-col">
              <p className="font-semibold text-xl">{el.voucherName}</p>
              <p className="mt-2"><span className="font-bold">Link:</span> {el.url}</p>
              <p className="font-bold mt-2">{el.fromSelect.split(',')[1]} SEK</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <p className="text-2xl">Total</p>
        <p className="text-2xl">{totalPrice} SEK</p>
      </div>
    </div>
    {/* payment method section */}
    <div>
        <h1 className="text-4xl text-center mt-4">Payment Method</h1>
        <div className="flex flex-col">
        {
          paymentMethods.map((el,i) => (
            <>
            <div className={`border-2 rounded-lg flex p-2 ${i===0?'mt-8':'mt-4'}`}>
              <input type='radio' name='paymentMethod' value={el.value} onChange={handlePaymentMethod} />
              <label className="flex items-center">
                <Image src={el.img} className={`w-20 h-6 ml-2 ${el.img === cashImg?'w-8 h-8':''}`}  alt={el.title} />
                <p className="ml-4">{el.title}</p>  
              </label>
            </div>
              {
                paymentMethod === 'creditDebitCard' && el.value === 'creditDebitCard' ?(
                  <div className="p-2">
                    <button className="border-2 px-2 mt-2" onClick={handleCreditDebitPayments}>Pay with Stripe</button>
                  </div>
                ):paymentMethod === 'paypal' && el.value === 'paypal' ? (
                  <div className="flex flex-col items-left">
                    <PayPalScriptProvider 
                        options={
                          {
                            'client-id': 'AV7wUYM7TOWXHbyfvc6Bty4QhBQjEmIx34ZRZ2R6dAzp-_BiLlgBsBl1hiBM2kTqWS9OJWoGh553bGys',
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
                        });
                    }}
                      />
                    </PayPalScriptProvider>
                  </div>
                ):paymentMethod === 'swish' && el.value === 'swish' ? (
                  <div>
                    swish
                  </div>
                ):''
              }
              </>
          ))
        }
        </div>
    </div>
    {/* Pay Button */}
    <button className="bg-blue2 p-4 text-white text-center w-full mt-2">Pay Now</button>
  </div>
  )
};

export default Checkout;
