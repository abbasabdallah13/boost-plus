import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { client } from '../../../lib/client'
import { BiArrowBack } from 'react-icons/bi'
import { IoIosCopy } from 'react-icons/io'
import { MdDoneAll } from 'react-icons/md';


const Id = () => {
    const router = useRouter();

    const [user, setUser] = useState([]);
    const [status, setStatus] = useState('');
    const [copied, setCopied] = useState(false);
    
    
    
    useEffect(() => {
      const query = `*[_type == 'links' && _id == '${router.query.id}']`;
      
      client.fetch(query).then(data => {setUser(data[0]); setStatus(data[0].status)});
    }, []);

    const doneClick = () => {
      setStatus('done');
      client
      .patch(router.query.id)
      .set({status:'done'})
      .commit()
    }
    

  return (
  <div className="z-[999] absolute top-[0rem] h-fit min-h-screen w-fit min-w-screen bg-[#272935] p-2 flex flex-col">
    <BiArrowBack className="cursor-pointer" size='5rem' color='#fff' onClick={() => router.back()}/>
    
    <div className="mt-4 flex">
      <label className="text-[#86DFE4] text-2xl">Full Name:</label>
      <p className="text-white text-2xl ml-4">{user?.fullName}</p>
    </div>
    
    <div className="mt-4 flex">
      <label className="text-[#86DFE4] text-2xl">Voucher:</label>
      <p className="text-white text-2xl ml-4"  >{user?.voucher}</p>
    </div>

    <div className="mt-4 flex">
      <label className="text-[#86DFE4] text-2xl">Payment Method:</label>
      <p className="text-white text-2xl ml-4" >{user?.paymentMethod}</p>
    </div>

    <div className="mt-4 flex">
      <label className="text-[#86DFE4] text-2xl">Pick up date & time (for pickup method):</label>
      <p className="text-white text-2xl ml-4" >{user?.pickupTime}</p>
    </div>

    <div className="mt-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <label className="text-[#86DFE4] text-2xl">Link:</label>
          <p className="text-white text-2xl px-2">{user?.link}</p>
        </div>
          { copied && <p className="text-white text-xs">Copied to clipboard</p> }
          <IoIosCopy size='1rem' color='#86dfe4' className="focus:text-white cursor-pointer" onClick={() => {navigator.clipboard.writeText(user?.link); setCopied(true)}} />
      </div>
    </div>

    <div className="mt-4 flex">
      <label className="text-[#86DFE4] text-2xl">Purchase date: </label>
      <p className="text-white text-2xl ml-4" >{user?.purchaseDate}</p>
    </div>

    <div className="flex justify-center w-full ">
      {
        status === 'pending' ? 
      ( <button className="bg-[#007c14] text-white rounded-md p-2 mt-4" onClick={() => doneClick()}>Mark As Done</button>)
      : ( 
          <div className="flex items-center gap-2">
            <span>
              <MdDoneAll color="#fff" />
            </span>
            <p className="text-white ">
              Done
            </p>
          </div>
          )
      }
    </div>
  </div>
  )
};

export default Id;
