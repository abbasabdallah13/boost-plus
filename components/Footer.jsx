import Image from "next/image";
import Link from "next/link";
import React from "react";

import whiteLogo from '../assets/white_logo.png';

const Footer = () => {
  const links = ['Instagram', 'Facebook', 'TikTok', 'YouTube', 'Twitter', 'Contact'];
  return (
    <div className="text-white">
      <div className="flex justify-between items-center bg-black w-full">
        <div className="p-4 text-xs flex flex-col gap-2">
          <h1>Telephone: 0700333433</h1>
          <h1>Svarstid: mellan 13:00 och 15:00 alla dagar <br></br>Kontor: fröknegårdsvägen 18 Kristianstad</h1>
          <h1>EMAIL: Support@smartboost.se</h1>
        </div>
        <div className="hidden lg:block">
          <ul>
          {
            links.map((el,i) => (
              <Link key={i}  href={el}><li className="inline ml-4">{el}</li></Link>
            ))
          }
          </ul>
        </div>
        <Image src={whiteLogo} className="w-10 h-15 mr-2 mt-12"  alt='white logo' />
      </div>
      <div className="bg-gray-300 text-black text-center px-4">
        <p>All rights reserved - 2023</p>
      </div>
  </div>
  )
};

export default Footer;
