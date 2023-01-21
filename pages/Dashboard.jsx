import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { InfinitySpin } from 'react-loader-spinner'
import Image from "next/image";
import logo from '../assets/logo.png';


const Dashboard = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    
   

    useEffect(() => {    
        if(!localStorage.getItem('dashboardUser')){
             router.push('/DashboardLogin');
         }
    }, []);
    

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);  
    }, []);
    
    
    return (
    <div className="relative">
        {loading && (
            <div className="absolute top-[-4.5rem] left-0 h-screen w-screen bg-[#272935] flex items-center justify-center z-[999]">
                <InfinitySpin width='200'color="#066995" />
            </div>            
        )}

        <div className="flex flex-col  justify-center items-center">
             <Image className="w-20 h-20 border-2 border-[#272935] rounded-full p-2" src={logo} alt='logo' />
             <h1 className="text-[#272935] text-xl">Welcome Smart User</h1>
        </div>
        </div>
    )


};

export default Dashboard;

