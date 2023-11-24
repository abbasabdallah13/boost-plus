import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { client } from "../../../../lib/client";
import InfinitySpinLoader from "../../../../components/dashboard components/InfinitySpinLoader";


const PendingLinks = () => {
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
                    <p className="text-center font-zen-kaku text-2xl">No pending links</p>
                </div>
            : links.map(el => (
                <>
                    {
                        el.status === 'pending' && (
                        <div className="bg-[#272935] rounded-lg flex text-white p-2 mt-2 cursor-pointer" onClick={() => router.push(`/dashboard/links/${el._id}`)}>                           
                            <div className="w-[90%]">
                                <h1 className="text-3xl">{el.fullname}</h1>
                                <h1 className="text-xl">{el.voucher}</h1>
                                <div className=" mt-2">
                                    <p className="bg-[#FFC700] text-[#272935] px-2 rounded-md w-fit">Pending</p>
                                    <p>{el.purchaseDate?.slice(0,15)}</p>
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

export default PendingLinks;
