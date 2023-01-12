import {React, useState, useEffect} from "react";
import likes from '../assets/likes.png';
import followers from '../assets/followers.png';
import comments from '../assets/comments.png';
import views from '../assets/views.png';
import Image from "next/image";
import { instaLikes, instaFollowers, instaComments, instaViews } from "../lib/data";


const Instagram = () => {
    const [selectLikes, setSelectLikes] = useState('');
    const [selectFollowers, setSelectFollowers] = useState('');
    const [selectViews, setSelectViews] = useState('');
    const [selectComments, setSelectComments] = useState('');
    
    
  return (
  <div className="flex flex-col items-center mt-28 px-10 md:h-screen">
    <h1 className="text-xl font-semibold">Våra Instagram-paket</h1>
    <p className="mt-4">Vi är svenskarnas föredragna leverantör & Vi är stolta över att du väljer oss framför våra konkurrenter.</p>
    <div className="flex flex-col md:flex-row">
        <div className="flex md:mt-10 sm:gap-x-10 md:gap-x-0">
            <div className="flex flex-col items-center justify-around">
                <Image src={likes} alt='likes' className="w-20 h-20 sm:h-28 sm:w-28 md:-w md:h-"  />
                <h1 className="text-xl">Likes</h1>
                <select className="border-2 border-black bg-slate-200" value={selectLikes} onChange={(e) => setSelectLikes(e.target.value)}>
                    {instaLikes.map(el => (
                        <option className=""  value={el.value}>{`${el.value} - ${el.price}sek`}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col items-center justify-around ml-4">
                <Image src={followers} alt='likes' className="w-20 h-20 sm:h-28 sm:w-28"  />
                <h1 className="text-xl">Followers</h1>
                <select className="border-2 border-black bg-slate-200" value={selectFollowers} onChange={(e) => setSelectFollowers(e.target.value)}>
                    {instaFollowers.map(el => (
                        <option value={el.value}>{`${el.value} - ${el.price}sek`}</option>
                    ))}
                </select>
            </div>
        </div>
        <div className="flex mt-10 sm:gap-x-10 md:gap-x-0">
            <div className="flex flex-col items-center justify-around ml-4">
                    <Image src={comments} alt='comments' className="w-20 h-20 sm:h-28 sm:w-28"  />
                    <h1 className="text-xl">Comments</h1>
                    <select className="border-2 border-black bg-slate-200" value={selectComments} onChange={(e) => setSelectComments(e.target.value)}>
                        {instaComments.map(el => (
                            <option value={el.value}>{`${el.value} - ${el.price}sek`}</option>
                        ))}
                    </select>
                </div>

            <div className="flex flex-col items-center justify-around ml-4 mt-8">
                    <Image src={views} alt='views' className="w-28 h-20 sm:h-28 sm:h-20"  />
                    <h1 className="text-xl">Views:</h1>
                    <select className="border-2 border-black bg-slate-200" value={selectViews} onChange={(e) => setSelectViews(e.target.value)}>
                        {instaViews.map(el => (
                            <option value={el.value}>{`${el.value} - ${el.price}sek`}</option>
                        ))}
                    </select>
            </div>
        </div>
    </div>

  </div>
  )
};

export default Instagram;
