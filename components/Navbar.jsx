import {React, useEffect, useState} from "react";
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion"
import { GrClose } from 'react-icons/gr'
import { useStateContext } from "../context/StateContext";
import burgerMenu from '../assets/burgermenu.png';
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';

import Cart from "./Cart";
import { SwishBanner } from "./home components";

const Navbar = () => {
  const { cartItems } = useStateContext();
  
  const [navbarModal, setNavbarModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  
  const links = ['Home','Instagram', 'Facebook', 'Tiktok','YouTube','Twitter', 'Contact'];

  const cartFunctions = () => {
    setCartModal(true);
  }

  return (
    <div className="w-full fixed top-0 z-[999] flex-col p-2 shadow-md bg-white">
      <div className="flex justify-between items-center">
              {/* burger menu on mobile devices */}
              <div className="flex items-center lg:hidden" onClick={()=> setNavbarModal(true)}>
                  <Image src={burgerMenu} alt='menu' className="w-12 h-12" />
              </div>
              {/* Clickabale logo image */}
              <Link href={'/'}><Image src={logo} alt='logo'className="w-20 h-30" /></Link>
              <div className="hidden lg:flex flex-col items-center gap-y-4">
                {/* Navlinks on large screens */}
                <ul className="hidden lg:block">
                {
                  links.map(el => (
                    <Link key={el} href={el === 'Home' ? '/' : '/' + el} className="ml-6 text-xl font-zen-kaku font-medium text-gray-700 active:text-white">
                      <motion.li
                        key={el}
                        whileHover={{
                          color: '#FF0000'
                        }}
                        className="inline" 
                          transition={{ type:'spring'}}
                      >
                        {el}
                      </motion.li>
                    </Link>
                  ))
                }
                </ul>
                <SwishBanner />
              </div>
              {/* cart icon */}
              <div className="relative">
                  <Image onClick={cartFunctions} src={cart} alt='cart' className="w-12 h-12 hover:cursor-pointer" />
                  <div className="absolute top-[-2px] right-[-5px] w-5 h-5 bg-red-600 rounded-full text-white flex items-center justify-center text-sm">
                    {cartItems?.length}
                  </div>
              </div>
              
              {/* Navbar links modal on small devices */}
              {
                navbarModal && (
                  <motion.div 
                    initial={{opacity: 0,y:-220}}
                    animate={{opacity: 1,y:5}}
                    transition={{delay:0.1, type:'spring'  }}
                    className="absolute top-0 left-0 py-2 px-6 w-fit bg-white border-4 border-black rounded-md z-40"
                  >
                  <GrClose className="absolute right-2 top-2 cursor-pointer" size={"2rem"} onClick={()=> setNavbarModal(false)}  />
                  <ul>
                    {
                      links.map(el => (
                        <li 
                          key={el}  
                          className={`capitalize ${el === 'Home' ? 'mt-6' : 'mt-4'} text-2xl text-gray-700 focus:text-decoration:underline`}
                          onClick={()=>setNavbarModal(false)}
                        >
                            <Link href={el === 'Home' ? '/' : '/' + el}>{el}</Link>
                        </li>
                        ))
                    }
                  </ul>
                  </motion.div>
                )
              }
              {
                cartModal && (
                  <Cart setCartModal={setCartModal} />
                )
              }
      </div>
      <div className="flex justify-center mt-2 lg:hidden">
        <SwishBanner />
      </div>
    </div>
  )
};

export default Navbar;

// export async function getServerSideProps(){
//   const response = await fetch('/api/cookies/cart-cookie');
//   const data = await response.json();
//   return {
//     props: {
//       cartCookie: cookie-value
//     }
//   }
// }