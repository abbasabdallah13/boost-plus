import React, { use, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";
import { AiOutlineLogin  } from "react-icons/ai";
import dashboardBg from '../assets/dashboard-bg.png'

const DashboardLogin = () => {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [invalidUser, setInvalidUser] = useState(false);
    

    const login = () => {
      if(username === 'anders.salman' && password === 'admin'){
        router.push('/dashboard')
        localStorage.setItem('dashboardUser', username)
        setInvalidUser(false);
      }else{
        setInvalidUser(true);
      }
    }

  return (
    <section className="mt-0 flex flex-col items-center justify-center h-fit min-h-screen">
        <Image className="z-10 absolute top-0 left-0 w-screen" src={dashboardBg} alt='stones' />
        <div className="z-20 bg-white opacity-70 flex flex-col p-4 w-4/5 rounded-md">   
            { invalidUser ? <p className="text-red-500 px-2">X &nbsp; Invalid User</p> : null }
            <label htmlFor="username">Username</label>
            <input type='text' onChange={(e) => setUsername(e.target.value)} className='px-2 rounded-lg bg-[#D9D9D9] h-9' />
            <label htmlFor="username">Password</label>
            <input type='password' onChange={(e) => setPassword(e.target.value)} className='px-2 rounded-lg bg-[#D9D9D9] h-9'  />        
            <div className="flex justify-center">
                <button onClick={() => login()}  className="rounded-full mt-2 w-10 h-10 neonBlue border-[#066995] border-2 text-4xl border-2 flex items-center justify-center"><AiOutlineLogin  /></button>
            </div>
        </div>
    </section>
  )
};

export default DashboardLogin;
