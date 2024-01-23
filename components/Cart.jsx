import {React, useState} from "react";
import { useStateContext } from "../context/StateContext";

import { motion } from "framer-motion";
import Image from "next/image";

import cartImg from '../assets/cartImg.png'

import { GrClose } from 'react-icons/gr'
import {BsFillTrashFill} from 'react-icons/bs'

import Link from 'next/link';
import { getVoucherImg } from "../lib/getVoucherImg";


const Cart = ({ setCartModal }) => {
    const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState(false)
    const { cartItems, deleteItem, totalPrice } = useStateContext();

  return (
    <motion.div 
      className="w-full flex flex-col md:w-1/2 lg:w-1/4 bg-white border-4 border-black z-[1000] absolute top-[-1.55rem] right-0 lg:right-0 lg:top-[-25px] lg:left-[unset] h-screen"
      initial={{opacity: 0,y:-120}}
      animate={{opacity: 1,y:25}}
      transition={{delay:0.1, type:'spring'  }}
    >
    <GrClose className="absolute top-2 right-2 cursor-pointer" onClick={()=>setCartModal(false)} size='2rem' />
    {
       cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-around h-full">
          <Image className="w-48 h-48 mr-6 max-w-full" src={cartImg} alt='cart' />
          <h1 className="text-xl text-center">Your Shopping Cart Is Empty</h1>
          <motion.button 
            whileTap={{ scale: 0.8 }}
            className="border-2 border-black rounded-full p-2 mt-2 focus:bg-black focus:text-white" onClick={()=>setCartModal(false)}>Check out our offers
          </motion.button>    
        </div>
      ):(
        <div className='overflow-y-scroll px-2 mt-10 h-[78vh]'>
          {
            cartItems.map((el,i,arr) => (
            <div key={el.voucherCode+'-'+i} className={`relative border-2 ${ i===0 ? 'mt-0' : 'mt-4' } ${i===arr.length-1 && 'mb-4'} p-2`}>
              <div key={el.url} className="flex items-center justify-between gap-2">
                <Image className="h-16 w-16" alt='voucher image' src={getVoucherImg(el.voucherCode)} />
                <div className="w-4/5"> 
                  <p className="text-sm">{`${el.fromSelect.split(',')[0]} ${el.voucherName}`}</p>
                  <p className="text-[9px] mt-[2px]">{el.url}</p>
                  <p className="text-[11px] text-slate-700 font-bold mt-[2px]">{`${el.fromSelect.split(',')[1]} SEK`}</p>
                </div>
              </div>
              <div className="absolute right-2 bottom-2 bg-slate-600 rounded-full text-center p-[5px]" onClick={()=>{setOpenConfirmDeleteModal(el.voucherName+el.url+el.fromSelect)}}>
                <BsFillTrashFill className="cursor-pointer text-white" size='.8rem' />
              </div>
              {
                openConfirmDeleteModal === el.voucherName+el.url+el.fromSelect && (
                  <div className="absolute top-0 left-0 w-full h-full bg-white opacity-95 flex flex-col justify-center items-center p-2">
                    <p>Are you sure you want to remove this item?</p>
                    <div className="flex gap-2">
                      <button className="bg-lime-700 text-white px-[4px] py-[1px] rounded-lg" onClick={() => deleteItem(el.voucherName,el.url,el.fromSelect)}>Yes</button>
                      <button className="bg-red-500 text-white px-[4px] py-[1px] rounded-lg" onClick={() => setOpenConfirmDeleteModal(false)}>No</button>
                    </div>
                  </div>
                )
              }
            </div>
            ))
          }
            <div className="absolute bottom-0 left-0 w-full flex flex-col border-t-2 border-black bg-white ">
              <p className="p-2 text-right text-black font-semibold">Total: {totalPrice} SEK</p>
              <Link className="p-4 text-center border-2 border-black checkout-btn bg-black text-white w-full"  href='/Checkout' onClick={() => setCartModal(false)}>Checkout</Link>
            </div>
        </div>
      )
    }
    
  </motion.div>
  )

};

export default Cart;
