import React, {  useState } from "react";
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

  return (
    <div className="relative">
        <div className="p-4 flex justify-between">
            <Image className="w-10 h-10 cursor-pointer" src={burgermenu} alt='burger-menu' onClick={() => setSidebar(true)}  />
            <Image src={logo} alt='logo' className="h-12 w-12" />
        </div>
        {
            sidebar ? ( 
                <>    
                  <div className="w-3/5 max-w-[385px] bg-[#272935] h-screen absolute top-0 z-[90]">
                    <div className="text-right p-4 text-white text-4xl" >
                        <p className="cursor-pointer" onClick={()=> setSidebar(false)}>X</p>
                    </div>
                    <div className="flex flex-col text-white text-4xl p-2">
                        {
                            links.map((el,i) => (
                                <Link className={`${i === 0?'':'mt-4'}`}  href={`/dashboard/${el.link}`} onClick={() => setSidebar(false)}>{el.name}</Link>
                            ))
                        }
                    </div>
                    <div className='flex justify-center text-white'>
                        <button className='bg-red-500 p-2 rounded-lg' onClick={() => {localStorage.clear(); window.location.reload()}}>Logout</button>
                    </div>
                  </div>  
                </>
                ) : '' 
        }
</div>
  )
}
export default DashboardNavbar;

