import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Image from "next/image";
import logo from '../../assets/logo.png';
import InfinitySpinLoader from "../../components/dashboard components/InfinitySpinLoader";


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
    <div className="relative h-screen">
        {
            loading && (
                <InfinitySpinLoader />
            )
        }

        <div className="flex flex-col justify-center items-center mt-32">
             <Image className="w-20 h-20 border-2 border-[#272935] rounded-full p-2" src={logo} alt='logo' />
             <h1 className="text-[#272935] text-xl">Welcome Smart User</h1>
        </div>
        </div>
    )


};

export default Dashboard;

