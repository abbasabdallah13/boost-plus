import React, { useEffect, useState } from "react";

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

import CheckoutUserDetails from "../components/checkout components/CheckoutUserDetails";
import PaymentMethod from "../components/checkout components/PaymentMethod";


const Checkout = () => {
  const { cartItems, totalPrice, fullName, setFullName, paymentMethod, setPaymentMethod } = useStateContext();
  
  const [paymentMethodModal, setPaymentMethodModal] = useState(false)
      
  return (
  <div className="mt-28 p-4 h-fit min-h-[70vh]">
    {/* order details section */}
    <div className="border-b-2 border-black">
      <h1 className="text-4xl font-zen-kaku font-semibold">Checkout</h1>
      <h3 className="font-heebo text-xl text-gray-500 m-2">Cart Summary</h3>
      <div className="overflow-y-scroll max-h-96">
        {
          cartItems.map(el => (
            <div className="flex items-center border-2 rounded-lg p-2 mt-4">
              <Image className="h-16 w-16 " src={el.voucherCode === 'instaLikes' ? instaLikesImg : el.voucherCode === 'instaFollowers' ? followersImg : el.voucherCode === 'instaComments' ? commentsImg : el.voucherCode === 'instaViews' ? viewsImg : el.voucherCode === 'fbLikes' ? fbLikesImg : el.voucherCode === 'fbComments' ? fbCommentsImg : el.voucherCode === 'fbPageLikes' ? fbPageLikesImg : el.voucherCode === 'youtubeLikes' ? youtubeLikesImg : el.voucherCode === 'youtubeComments' ? youtubeCommentsImg : el.voucherCode === 'youtubeViews' ? youtubeViewsImg : el.voucherCode === 'youtubeSubscribers' ? youtubeSubscribersImg : el.voucherCode === 'tiktokComments' ? tiktokCommentsImg : el.voucherCode === 'tiktokLikes' ? tiktokLikesImg : el.voucherCode === 'tiktokShares' ? tiktokSharesImg : el.voucherCode === 'tiktokViews' ? tiktokViewsImg : el.voucherCode === 'twitterLikes' ? twitterLikesImg : el.voucherCode === 'twitterFollowers' ? twitterFollowersImg : ''}  alt='voucher' />
              <div className="p-2 flex flex-col">
                <p className="font-zen-kaku font-semibold text-lg">{el.fromSelect.split(',')[0]} {el.voucherName}</p>
                <p className="mt-2 text-xs font-heebo">{el.url}</p>
                <p className="font-bold mt-2 text-xs text-slate-600 font-zen-kaku font-bold">{el.fromSelect.split(',')[1]} SEK</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex justify-between mt-4">
        <p className="text-xl">Total</p>
        <p className="text-xl">{totalPrice} SEK</p>
      </div>
    </div>

    {/* User Details */}
    <CheckoutUserDetails setPaymentMethodModal={setPaymentMethodModal} />
        
    {/* payment method section */}
        <PaymentMethod paymentMethodModal={paymentMethodModal}/>

  </div>
  )
};

export default Checkout;
