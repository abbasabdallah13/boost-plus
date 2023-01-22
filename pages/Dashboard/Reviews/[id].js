import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { client } from '../../../lib/client'
import { BiArrowBack } from 'react-icons/bi'


const Id = () => {
    const router = useRouter();

    const [review, setReview] = useState([]);
    const [oldReview, setOldReview] = useState([]);
    
    
    
    
    useEffect(() => {
      const query = `*[_type == 'reviewsToDashboard' && _id == '${router.query.id}']`;
      const query2 = `*[_type == 'reviews' && _id == '${router.query.id}']`
      client.fetch(query).then(data => setReview(data[0]));
      client.fetch(query2).then(data => setOldReview(data[0]));
    }, []);

    const acceptReview = () => {
        const doc = {
            _type: 'reviews',
            fullname: review.fullname,
            gender: review.gender,
            score: review.score,
            feedback: review.feedback,
            reason: review.reason
        }

        client.create(doc).then(() => client.delete({query: `*[_type == "reviewsToDashboard" && _id == "${review._id}"]`})).then(() => router.back());
    }

    const rejectReview = () => {
        client.delete({query: `*[_type == "reviewsToDashboard" && _id == "${review._id}"]`}).then(() => router.back());
    }

    const deleteOldFeedback = () => {
      client.delete({query: `*[_type == "reviews" && _id == "${oldReview._id}"]`}).then(() => router.back())
    }

    
    

  return (
    
  <div className="z-[999] absolute top-[0rem] h-screen w-screen bg-[#272935] p-2 flex flex-col justify-around">
    <div className="mt-24">
        <BiArrowBack size='5rem' color='#fff' onClick={() => router.back()}/>
    </div>
    {
      review ? (
       <>
       <div className="mt-4">
          <label className="text-[#86DFE4] text-4xl">Full Name:</label>
          <p className="text-white text-2xl ml-4">{review.fullname}</p>
        </div>
        
        <div className="mt-4">
          <label className="text-[#86DFE4] text-4xl">Gender:</label>
          <p className="text-white text-2xl ml-4"  >{review?.gender}</p>
        </div>

        <div className="mt-4">
          <label className="text-[#86DFE4] text-4xl">Star Rating:</label>
          <p className="text-white text-2xl ml-4"  >{(review?.score)/20} Stars</p>
        </div>

        <div className="mt-4">
          <label className="text-[#86DFE4] text-4xl">Feedback:</label>
          <p className="text-white text-2xl ml-4"  >{review?.feedback}</p>
        </div>

        <div className="mt-4">
          <label className="text-[#86DFE4] text-4xl">Reason:</label>
          <p className="text-white text-2xl ml-4"  >{review?.reason}</p>
        </div>
        <div className="flex justify-center w-full mt-4 gap-2">
        <button className="bg-[#007C14] p-2 text-white rounded-md" onClick={() => acceptReview()}>Accept</button>
        <button className="bg-[#790505] p-2 text-white rounded-md" onClick={() => rejectReview()} >Reject</button>
      </div>
        </>
      ):
      (
<>
       <div className="mt-4">
          <label className="text-[#86DFE4] text-4xl">Full Name:</label>
          <p className="text-white text-2xl ml-4">{oldReview?.fullname}</p>
        </div>
        
        <div className="mt-4">
          <label className="text-[#86DFE4] text-4xl">Gender:</label>
          <p className="text-white text-2xl ml-4"  >{oldReview?.gender}</p>
        </div>

        <div className="mt-4">
          <label className="text-[#86DFE4] text-4xl">Star Rating:</label>
          <p className="text-white text-2xl ml-4"  >{(oldReview?.score)/20} Stars</p>
        </div>

        <div className="mt-4">
          <label className="text-[#86DFE4] text-4xl">Feedback:</label>
          <p className="text-white text-2xl ml-4"  >{oldReview?.feedback}</p>
        </div>

        <div className="mt-4">
          <label className="text-[#86DFE4] text-4xl">Reason:</label>
          <p className="text-white text-2xl ml-4"  >{oldReview?.reason}</p>
        </div>
        <div>
          <button className="bg-[#790505] p-2 text-white rounded-md" onClick={()=>  deleteOldFeedback()}>Delete</button>
        </div>
        </>
      )
    }
    
 </div>
  )
};

export default Id;
