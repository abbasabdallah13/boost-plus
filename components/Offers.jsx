import React from "react";
import instaImg from '../assets/insta.png';
import facebookImg from '../assets/fb.png';
import tiktokImg from '../assets/tiktok.png';
import twitterImg from '../assets/twitter.png'
import Image from 'next/image'

const Offers = () => {
    const offersData = [
        {
            name: 'Instagram',
            followers: 
                {
                    amount: 1000,
                    oldPrice:439,
                    newPrice:199
                },
            likes: 
                {
                    amount: 1000,
                    oldPrice:399,
                    newPrice:239
                },
            views: 
                {
                    amount: 1000,
                    oldPrice:280,
                    newPrice:35
                },
            comments: 
                {
                    amount: 40,
                    oldPrice:650,
                    newPrice:299
                },
            image: instaImg
    },
     {
           
            name: 'Facebook',
            followers: 
                {
                    amount: 1000,
                    oldPrice:450,
                    newPrice:349
                },
            likes: 
                {
                    amount: 1000,
                    oldPrice:599,
                    newPrice:169
                },
            comments: 
                {
                    amount: 50,
                    oldPrice:1290,
                    newPrice:990
                },
            image: facebookImg
     },
    {
        name: 'TikTok',
        followers: 
                {
                    amount: 1000,
                    oldPrice:449,
                    newPrice:249
                },
            likes: 
                {
                    amount: 1000,
                    oldPrice:239,
                    newPrice:99
                },
            views: 
                {
                    amount: 1000,
                    oldPrice:150,
                    newPrice:29
                },
            comments: 
                {
                    amount: 10,
                    oldPrice:149,
                    newPrice:69
                },
            image: tiktokImg
    }
    ]


  return (
  <div className="p-4 flex flex-col mt-10">
    <h1 className="text-center font-bold text-2xl">Choose from the below offers:</h1>
    {
        offersData.map((el,i) => 
            el.name !== 'Facebook' ? (
            <div className={`flex flex-col items-center sm:mt-14   sm:justify-around sm:flex-row`}>

                <div className="flex-col items-center">
                    <Image src={el.image} alt={el} className="w-48 h-48 " />
                    <p className="text-center font-semibold text-xl">{el.name}</p>
                </div>

                <div className="">
                        <div className="flex flex-col items-center gap-2">
                            <h1 className="text-l text-center font-semibold">{el.followers?.amount} Followers</h1>
                           <div className="flex items-center">
                                <span className="line-through">&nbsp;{el.followers?.oldPrice}kr&nbsp;</span>
                                <span className="bg-red-500 text-white px-2">{el.followers?.newPrice}kr</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h1 className="text-l text-center font-semibold">{el.likes?.amount} Likes</h1>
                           <div className="flex items-center">
                                <span className="line-through">&nbsp;{el.likes?.oldPrice}kr&nbsp;</span>
                                <span className="bg-red-500 text-white px-2">{el.likes?.newPrice}kr</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h1 className="text-l text-center font-semibold">{el.views?.amount} Views</h1>
                           <div className="flex items-center">
                                <span className="line-through">&nbsp;{el.views?.oldPrice}kr&nbsp;</span>
                                <span className="bg-red-500 text-white px-2">{el.views?.newPrice}kr</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h1 className="text-l text-center font-semibold">{el.comments?.amount} Comments</h1>
                           <div className="flex items-center">
                                <span className="line-through">&nbsp;{el.comments?.oldPrice}kr&nbsp;</span>
                                <span className="bg-red-500 text-white px-2">{el.comments?.newPrice}kr</span>
                            </div>
                        </div>                        
                </div>
            </div>
        ):(
                <div className={`flex flex-col items-center sm:mt-14   sm:justify-around sm:flex-row`}>

                <div className="flex-col items-center">
                    <Image src={el.image} alt={el} className="h-48 w-48" />
                    <p className="text-center font-semibold text-xl">{el.name}</p>
                </div>

                <div className="">
                        <div className="flex flex-col items-center gap-2">
                            <h1 className="text-l text-center font-semibold">{el.followers?.amount} Followers</h1>
                        <div className="flex items-center">
                                <span className="line-through">&nbsp;{el.followers?.oldPrice}kr&nbsp;</span>
                                <span className="bg-red-500 text-white px-2">{el.followers?.newPrice}kr</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h1 className="text-l text-center font-semibold">{el.likes?.amount} Likes</h1>
                        <div className="flex items-center">
                                <span className="line-through">&nbsp;{el.likes?.oldPrice}kr&nbsp;</span>
                                <span className="bg-red-500 text-white px-2">{el.likes?.newPrice}kr</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h1 className="text-l text-center font-semibold">{el.comments?.amount} Comments</h1>
                        <div className="flex items-center">
                                <span className="line-through">&nbsp;{el.comments?.oldPrice}kr&nbsp;</span>
                                <span className="bg-red-500 text-white px-2">{el.comments?.newPrice}kr</span>
                            </div>
                        </div>                        
                </div>
            </div>
             )     
        )
    }

  </div>
  )
};

export default Offers;