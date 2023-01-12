import {React, useState} from "react";
import burgerMenu from '../assets/burgermenu.png';
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';
import cartImg from '../assets/cartImg.png'
import Image from "next/image";
import { GrClose } from 'react-icons/gr'
import Link from 'next/link';
import { motion } from "framer-motion"


const Navbar = () => {
  const [navbarModal, setNavbarModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);

  
  const links = ['Instagram', 'Facebook', 'Tiktok', 'Twitter'];

  const cartFunctions = () => {
    setCartModal(true);

  }

  return (
  <div className="fixed top-0  w-full flex justify-between p-2 items-center p-2 shadow-md z-50 bg-white">
        <div className="flex items-center lg:hidden" onClick={()=> setNavbarModal(true)}>
            <Image src={burgerMenu} alt='menu' className="w-12 h-12" />
        </div>
        <Link href={'/'}><Image src={logo} alt='logo'className="w-20 h-30" /></Link>
        <ul className="hidden lg:block lg:ml-40">
        {
          links.map(el => (
            <motion.li
            
            whileHover={{
              textDecoration: 'underline',
            }}

            className="inline" 
              transition={{ type:'spring'}}
            ><Link href={'/'+el} className="ml-12 text-xl">{el}
            </Link>
            </motion.li>
          ))
        }
        </ul>
        <div>
            <Image onClick={cartFunctions}  src={cart} alt='cart' className="w-12 h-12 hover:cursor-pointer" />
        </div>

        {
          navbarModal && (
            <motion.div 
              initial={{opacity: 0,y:-220}}
              animate={{opacity: 1,y:5}}
              transition={{delay:0.1, type:'spring'  }}
              className="absolute top-0 left-0 p-2 w-3/5 bg-white border-4 border-black rounded-md z-40">
             <span><GrClose className="absolute right-2 top-2" size={"2rem"} onClick={()=> setNavbarModal(false)}  /></span> 
              <ul>
              {links.map(el => (
                <li 
                  key={el}  
                  className="capitalize mt-2"
                  >
                    <Link href={'/'}>{el}</Link>
                </li>
              ))}
              </ul>
            </motion.div>
          )
        }
        {
          cartModal && (
              <motion.div className="absolute top-12 left-0 bg-white border-8 border-red-600 p-4 z-50 w-full flex flex-col items-center lg:w-1/4 lg:right-0 lg:!top-[-25px] lg:left-[unset] lg:h-screen"
                initial={{opacity: 0,y:-120}}
                animate={{opacity: 1,y:25}}
                transition={{delay:0.1, type:'spring'  }}
              >
                <GrClose className="absolute right-4" onClick={()=>setCartModal(false)} size='2rem'  />
                <Image src={cartImg} alt='cart' />
                <h1 className="text-xl">Your Shopping Cart Is Empty</h1>
                <motion.button 
                  whileTap={{ scale: 0.8 }}
                  className="border-2 border-black rounded-full p-2 mt-2 focus:bg-black focus:text-white" onClick={()=>setCartModal(false)}>Back to Offers</motion.button>
              </motion.div>
          )
        }
  </div>
  )
};

export default Navbar;
