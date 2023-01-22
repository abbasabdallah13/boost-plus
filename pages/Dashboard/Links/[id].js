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
      .then(console.log('updated'))
    }
    

  return (
  <div className="z-[999] absolute top-[0rem] h-screen w-screen bg-[#272935] p-2 flex flex-col justify-around">
    <BiArrowBack size='5rem' color='#fff' onClick={() => router.back()}/>
    
    <div className="mt-4">
      <label className="text-[#86DFE4] text-4xl">Full Name:</label>
      <p className="text-white text-2xl ml-4">{user.fullname}</p>
    </div>
    
    <div className="mt-4">
      <label className="text-[#86DFE4] text-4xl">Voucher:</label>
      <p className="text-white text-2xl ml-4"  >{user.voucher}</p>
    </div>

    <div className="mt-4">
      <label className="text-[#86DFE4] text-4xl">Payment Method:</label>
      <p className="text-white text-2xl ml-4"  >{user.paymentMethod === 'creditDebitCard' ? 'Credit/Debit Card' : user.paymentMethod === 'paypal' ? 'PayPal' : user.paymentMethod === 'swish' ? 'Swish' : user.paymentMethod ==='cash' ? 'Cash' : ''}</p>
    </div>

    <div className="mt-4">
      <div className="flex justify-between items-center">
        <label className="text-[#86DFE4] text-4xl">Link:</label>
        <div className="flex items-center gap-2">
          {copied && (<p className="text-white text-xs">Copied to clipboard</p>)}
          <IoIosCopy size='1rem' color='#86dfe4' className="focus:text-white" onClick={() => {navigator.clipboard.writeText(user.link); setCopied(true)}} />
        </div>
      </div>
      <p className="text-white text-sm border border-2 px-2"  >{user.link}</p>
    </div>

    <div className="flex justify-center w-full mt-4">
      {
        status === 'pending' ? 
      ( <button className="bg-[#007c14] text-white rounded-md p-2" onClick={() => doneClick()}>Mark As Done</button>)
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
