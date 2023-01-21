import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { client } from "../../lib/client";
import { InfinitySpin } from "react-loader-spinner";
import { MdDoneAll } from 'react-icons/md';


const Links = () => {
    const router = useRouter();

    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    useEffect(() => {
      const query = `*[_type == 'links']`;
      client.fetch(query).then(data => {setLinks(data); console.log(data)})

      setTimeout(() => {
        setLoading(false)
      }, 3000);
    }, []);
    
  return (
    <div className="p-2 relative" >
         {loading && (
            <div className="absolute top-[-4.5rem] left-0 h-screen w-screen bg-[#272935] flex items-center justify-center z-[999]">
                <InfinitySpin width='200'color="#066995" />
            </div>            
        )}
        {
            links.map(el => (
                <div className="bg-[#272935] rounded-lg flex text-white p-2 mt-2" onClick={() => router.push(`/Dashboard/Links/${el._id}`)}>
                    <div className="w-[90%]">
                        <h1 className="text-3xl">{el.fullname}</h1>
                        <h1 className="text-xl">{el.voucher}</h1>
                        <div className=" mt-2">
                        {
                                el.status === 'pending' ? 
                            ( <p className="bg-[#FFC700] text-[#272935] px-2 rounded-md w-fit">Pending</p>)
                            : ( 
                                <div className="flex items-center gap-2">
                                    <span>
                                    <MdDoneAll color="#16E437" />
                                    </span>
                                    <p className="text-[#16E437] ">
                                    Done
                                    </p>
                                </div>
                                )
                            }
                            
                        </div>
                    </div>
                    <div className="text-7xl flex items-top justify-center">
                        &gt;
                    </div>
                </div>
            ))
        }
    </div>
  )
};

export default Links;
