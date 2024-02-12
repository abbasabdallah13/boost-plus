import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { client } from "../../../../lib/client";
import { MdDoneAll } from 'react-icons/md';
import InfinitySpinLoader from "../../../../components/dashboard components/InfinitySpinLoader";

const DoneLinks = () => {
    const router = useRouter();

    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    useEffect(() => {
      const query = `*[_type == 'links'] | order(_createdAt desc)`;
      client.fetch(query).then(data => { setLinks(data) })

      setTimeout(() => {
        setLoading(false)
      }, 3000);
    }, []);
    
  return (
    <div className="p-2 relative" >
        {
            loading && <InfinitySpinLoader />
        }
        {
             links.length === 0 ?
             <div className="flex justify-center items-center h-screen">
                 <p className="text-center font-zen-kaku text-2xl">No links yet</p>
             </div>
            : links.map(el => (
                <>
                    {
                        el.status === 'done' && (
                        <div className="bg-[#272935] rounded-lg flex text-white p-2 mt-2 cursor-pointer" onClick={() => router.push(`/dashboard/links/${el._id}`)}>                           
                            <div className="w-[90%]">
                                <h1 className="text-3xl">{el.fullname}</h1>
                                <h1 className="text-xl">{el.voucher}</h1>
                                <div className="flex items-center gap-2">
                                        <span><MdDoneAll color="#16E437" /></span>
                                        <p className="text-[#16E437]">Done</p>
                                </div>
                            </div>
                            <div className="text-7xl flex items-top justify-center">
                                &gt;
                            </div>
                        </div>
                        )
                    }
                </>
            ))
        }
    </div>
  )
};

export default DoneLinks;
