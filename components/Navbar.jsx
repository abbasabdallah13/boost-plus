import {React, useState} from "react";
import burgerMenu from '../assets/burgermenu.png';
import { GrClose } from 'react-icons/gr'
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion"
import { useStateContext } from "../context/StateContext";

import Cart from "./Cart";

const Navbar = () => {
  const [navbarModal, setNavbarModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);

  
  const links = ['Home','Instagram', 'Facebook', 'Tiktok','YouTube','Twitter', 'Contact'];

  const { cartItems } = useStateContext();

  const cartFunctions = () => {
    setCartModal(true);

  }

  return (
  <div className="fixed top-0  w-full flex justify-between p-2 items-center p-2 shadow-md bg-white" style={{zIndex: '999'}}>
        <div className="flex items-center lg:hidden" onClick={()=> setNavbarModal(true)}>
            <Image src={burgerMenu} alt='menu' className="w-12 h-12" />
        </div>
        <Link href={'/'}><Image src={logo} alt='logo'className="w-20 h-30" /></Link>
        <ul className="hidden lg:block lg:ml-60">
        {
          links.map(el => (
            <Link key={el} href={el === 'Home' ? '/' : '/' + el} className="ml-4 text-xl active:text-white">
            <motion.li
            key={el}
            whileHover={{
              textDecoration: 'underline',
            }}

            className="inline" 
              transition={{ type:'spring'}}
            >{el}
            </motion.li>
            </Link>
          ))
        }
        </ul>
        <div className="relative">
            <Image onClick={cartFunctions}  src={cart} alt='cart' className="w-12 h-12 hover:cursor-pointer" />
            <div className="absolute top-[-2px] right-[-5px] w-5 h-5 bg-red-600 rounded-full text-white flex items-center justify-center text-sm">{cartItems?.length}</div>
        </div>

        {
          navbarModal && (
            <motion.div 
              initial={{opacity: 0,y:-220}}
              animate={{opacity: 1,y:5}}
              transition={{delay:0.1, type:'spring'  }}
              className="absolute top-0 left-0 p-2 w-3/5 bg-white border-4 border-black rounded-md z-40">
             <span><GrClose className="absolute right-2 top-2 cursor-pointer" size={"2rem"} onClick={()=> setNavbarModal(false)}  /></span> 
              <ul>
              {links.map(el => (
                <li 
                  key={el}  
                  className="capitalize mt-4 text-3xl focus:text-decoration:underline"
                  onClick={()=>setNavbarModal(false)}
                  >
                    <Link href={el === 'Home' ? '/' : '/' + el}>{el}</Link>
                </li>
              ))}
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
  )
};

export default Navbar;
