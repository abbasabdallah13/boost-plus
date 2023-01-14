import {React, useEffect} from "react";
import { useStateContext } from "../context/StateContext";

import { motion } from "framer-motion";
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

import cartImg from '../assets/cartImg.png'

import { GrClose } from 'react-icons/gr'
import {BsFillTrashFill} from 'react-icons/bs'

import Link from 'next/link';

import { client } from '../lib/client';
import { twitterLikes } from "../lib/data";


const Cart = ({setCartModal}) => {
    const { cartItems, deleteItem } = useStateContext();

useEffect(() => {
  console.log(JSON.parse(localStorage.getItem('cart')));
}, []);


  return (
    <motion.div className="absolute top-[-1.55rem] right-0 bg-white border-4 border-black p-4 z-50 w-full flex md:w-1/2 flex-col lg:w-1/4 lg:right-0 lg:!top-[-25px] lg:left-[unset] h-screen"
    initial={{opacity: 0,y:-120}}
    animate={{opacity: 1,y:25}}
    transition={{delay:0.1, type:'spring'  }}
  >
    <div className="fixed right-0 w-full bg-white z-50 flex justify-end">
      <GrClose className="cursor-pointer" onClick={()=>setCartModal(false)} size='2rem'  />
    </div>
    {
       cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-around h-screen">
          <Image src={cartImg} alt='cart' />
          <h1 className="text-xl text-center">Your Shopping Cart Is Empty</h1>
          <motion.button 
            whileTap={{ scale: 0.8 }}
            className="border-2 border-black rounded-full p-2 mt-2 focus:bg-black focus:text-white" onClick={()=>setCartModal(false)}>Back to Offers
          </motion.button>    
        </div>
      ):(
        <div className='overflow-y-scroll'>
          {
            cartItems.map((el,i,arr) => (
            <div className={`border-2 ${i===0 && 'mt-8'} mt-4 ${i===arr.length-1 && 'mb-4'}  relative p-2`}>
              <div key={el.url}  className="flex items-center justify-between gap-2">
                <Image className="h-16 w-16" alt='social media pic'  src={el.voucherCode === 'instaLikes' ? instaLikesImg : el.voucherCode === 'instaFollowers' ? followersImg : el.voucherCode === 'instaComments' ? commentsImg : el.voucherCode === 'instaViews' ? viewsImg : el.voucherCode === 'fbLikes' ? fbLikesImg : el.voucherCode === 'fbComments' ? fbCommentsImg : el.voucherCode === 'fbPageLikes' ? fbPageLikesImg : el.voucherCode === 'youtubeLikes' ? youtubeLikesImg : el.voucherCode === 'youtubeComments' ? youtubeCommentsImg : el.voucherCode === 'youtubeViews' ? youtubeViewsImg : el.voucherCode === 'youtubeSubscribers' ? youtubeSubscribersImg : el.voucherCode === 'tiktokComments' ? tiktokCommentsImg : el.voucherCode === 'tiktokLikes' ? tiktokLikesImg : el.voucherCode === 'tiktokShares' ? tiktokSharesImg : el.voucherCode === 'tiktokViews' ? tiktokViewsImg : el.voucherCode === 'twitterLikes' ? twitterLikesImg : el.voucherCode === 'twitterFollowers' ? twitterFollowersImg : ''} alt={el.value} />
                <div>
                  <p className="text-sm">{`${el.fromSelect.split(',')[0]} ${el.voucherName} Voucher`}</p>
                  <p>URL:{el.url.slice(0,15)}</p>
                  <p className="text-sm">{`${el.fromSelect.split(',')[1]} SEK`}</p>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 bg-black rounded-full text-center p-[5px]" onClick={()=>deleteItem(el.voucherName,el.url,el.fromSelect)}>
                <BsFillTrashFill className=" cursor-pointer text-white" size='.8rem' />
              </div>
            </div>
            ))
          }
          <div className="flex justify-center p-4 items-center border-2 border-black mt-4 checkout-btn fixed bottom-0 bg-black text-white  w-full left-0">
            <Link href='/Checkout'>Checkout</Link>
          </div>
        </div>
      )
    }
    
  </motion.div>
  )

};

export default Cart;
