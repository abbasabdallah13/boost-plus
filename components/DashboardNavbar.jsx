import React, { useEffect, useState } from "react";
import burgermenu from '../assets/burgermenu.png';
import logo from '../assets/logo.png';
import Image from "next/image";
import Link from "next/link";
const DashboardNavbar = () => {
    const [sidebar, setSidebar] = useState(false);
    

    const links = [
        {
            name: 'HOME',
            link: '/',
        },
        {
            name: 'LINKS',
            link: '/Links',
        },
        {
            name: 'REVIEWS',
            link: '/Reviews',
        } 
    ]

  return  (
    
  <div className="relative">
          {/* {loading && (
            <div className="absolute top-0 left-0 h-screen w-screen bg-[#272935] flex items-center justify-center z-[999]">
                <InfinitySpin width='200'color="#066995" />
            </div>            
        )} */}
         
                    <div className="p-4 flex justify-between">
                        <Image className="w-10 h-10" src={burgermenu} alt='burger-menu' onClick={() => setSidebar(true)}  />
                        <Image src={logo} alt='logo' className="h-12 w-12" />
                    </div>
    
           {
                sidebar ? ( 
                    <>
                    
                    <div className="w-3/5 bg-[#272935] h-screen absolute top-0 z-[99]">
                        <div className="text-right p-4 text-white text-4xl" >
                                <p onClick={()=> setSidebar(false)}>X</p>
                        </div>
                        <div className="flex flex-col text-white text-4xl p-2">
                            {
                                links.map((el,i) => (
                                    <Link className={`${i === 0?'':'mt-4'}`}  href={`/Dashboard/${el.link}`} onClick={() => setSidebar(false)}>{el.name}</Link>
                                ))
                            }
                        </div>
                    </div>  
                    </>
                ) : '' 
            }
</div>
  )
}
export default DashboardNavbar;
