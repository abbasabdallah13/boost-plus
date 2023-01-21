import React, { useEffect, useState } from "react";
import boy from '../assets/boy.png';
import girl from '../assets/girl.png';
import stars from '../assets/stars.png';
import Image from "next/image";
import { RatingStar } from "rating-star";
import { client } from "../lib/client";

const Feedbacks = () => {
    const [users, setUsers] = useState([]);
    const [fullName, setFullName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [gender, setGender] = useState('');
    const [rating, setRating] = useState(0);
    const [usingSmartBoostFor, setUsingSmartBoostFor] = useState('');
    const [otherOption, setOtherOption] = useState('');
    
    
    

    const onRatingChange = (score) => {
        setRating(score);
    }

    const updateFeedback = (e) => {
        setFeedback(e.target.value)
    }

    const handleGender = (e) => {
        setGender(e.target.value)
    }

    useEffect(() => {
      const query = `*[_type == 'reviews']`;
      client.fetch(query).then(data => {setUsers(data); console.log(data)})

    }, []);

    const submitReview = () => {
        const doc = {
            _type: 'reviewsToDashboard',
            fullname: fullName,
            feedback: feedback,
            gender: gender,
            score: rating,
            reason: usingSmartBoostFor
          }
    
          client.create(doc).then(() => {
            setFullName('');
            setFeedback('');
            setGender('');
            setRating(0);
            setUsingSmartBoostFor('Social Media Entertainment');
            setOtherOption('');
          });
    }
    

  return (
  <div className="flex flex-col justify-center">

    <div className="bg-pink px-8 py-4">
        
        <h1 className="text-2xl font-semibold text-white">Vad säger våra kunder?</h1>
        
        {
            users.map((el,i) => (
                <div key={i}  className="flex items-center gap-4 mt-4">
                        <Image className="w-16 h-16 " src={el.gender === 'male' ? boy : girl} alt={el.name} />
                    <div>
                       <h1 className="text-white text-xl">{el.fullname}</h1>
                       <RatingStar
                            id={i}
                            maxScore={100}
                            rating={el.score}
                        />
                        <p className="text-sm text-white">{el.feedback}</p>
                    </div>
                </div>
            ))
        }

    </div>
    <div className="p-4 bg-pink text-white border-t-2">
        <h1 className="text-2xl font-semibold">Provide Feedback</h1>
        <p className="ml-2 mb-4 mt-2">Send feedback in case you tried our service and we will post it here with your name once approved</p>
        <RatingStar
            id='special'
            clickable
            maxScore={100}
            rating={rating}
            onRatingChange={onRatingChange}
        />
        <div className="mt-2">
            <label className="text-xl" htmlFor="fullname">Full Name</label>
            <input className="ml-2 text-black px-2 bg-[#e5e5e5]" type='text' value={fullName} onChange={(e)=>setFullName(e.target.value)} />
        </div>
        
        <div className="mt-2">
            <label>Why are you using Smart Boost ?</label>
            <select onChange={(e) => setUsingSmartBoostFor(e.target.value)}  className="text-black p-2 ml-2">
                <option value=''>Social Media Entertainment</option>
                <option value='Boosting Sales'>Boosting Sales</option>
                <option value='New Page'>New Page</option>
                <option value='other'>Other</option>
            </select>
        </div>
            {
                usingSmartBoostFor === 'other' && (
                    <div className="ml-4 mt-4">
                        <label>Kindly share with us your reason </label>
                        <input className="text-black px-2"  type='text' value={otherOption}  onChange={(e) => setOtherOption(e.target.value)} />
                    </div>
                )
            }
        <label className="text-xl" htmlFor="gender">Gender</label>
        <div>
            <input type={'radio'} name='gender' value='male' onChange={handleGender} />
            <label htmlFor="male">Male</label>

            <input className="ml-2" type={'radio'} name='gender' value='female' onChange={handleGender} />
            <label htmlFor="female">Female</label>
        </div>
        <h1 className="text-xl font-semibold mt-4">Feedback:</h1>
        <textarea value={feedback} onChange={updateFeedback} className="border-black border-2 w-full text-black p-2"></textarea>
        <button 
            onClick={submitReview}
            className="border-2 border-black px-2 bg-white text-pink">Submit
        </button>
    </div>
  </div>
  )
};

export default Feedbacks;
