import React, { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { client } from "../../lib/client";
import { useRouter } from 'next/router';

const Reviews = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [reviews, setReviews] = useState([]);
  

  useEffect(() => {   
    setTimeout(() => {
      setLoading(false)
    }, 3000);

    const query = `*[_type == 'reviewsToDashboard']`;
    const query2 = `*[_type == 'reviews']`;
    client.fetch(query).then(data => setData1(data))
    client.fetch(query2).then(data2 => setData2(data2))

  }, []);

  return (
    <div className="relative p-2">
       {loading && (
            <div className="absolute top-[-4.5rem] left-0 h-screen w-screen bg-[#272935] flex items-center justify-center z-[999]">
                <InfinitySpin width='200'color="#066995" />
            </div>            
        )}
        {
          data1.map(el => (
            <div className="bg-[green] rounded-lg flex text-white p-2 mt-2" onClick={() => router.push(`/Dashboard/Reviews/${el._id}`)}>
            <div className="w-[90%]">
                <h1 className="text-3xl">{el.fullname}</h1>
                <div className=" mt-2">  
                  <p>{el.feedback}</p>                  
                  <p>{el.reason}</p>                 
                </div>
            </div>
            <div className="text-7xl flex items-top justify-center">
                &gt;
            </div>
        </div>
          ))
        }
        {
          data2.map(el => (
            <div className="bg-[#272935] rounded-lg flex text-white p-2 mt-2" onClick={() => router.push(`/Dashboard/Reviews/${el._id}`)}>
            <div className="w-[90%]">
                <h1 className="text-3xl">{el.fullname}</h1>
                <div className=" mt-2">  
                  <p>{el.feedback}</p>                  
                  <p>{el.reason}</p>                  
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

export default Reviews;
