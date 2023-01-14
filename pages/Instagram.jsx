import {React, useState, useEffect} from "react";
import likes from '../assets/likes.png';
import followers from '../assets/followers.png';
import comments from '../assets/comments.png';
import views from '../assets/views.png';
import Image from "next/image";
import { instaLikes, instaFollowers, instaComments, instaViews } from "../lib/data";
import { useStateContext } from "../context/StateContext";
import { toast } from "react-hot-toast";



const Instagram = () => {
    const [selectLikes, setSelectLikes] = useState([]);
    const [selectFollowers, setSelectFollowers] = useState('');
    const [selectViews, setSelectViews] = useState('');
    const [selectComments, setSelectComments] = useState('');  
    
    const [likesUrl, setLikesUrl] = useState('');
    const [followersUrl, setFollowersUrl] = useState('');
    const [commentsUrl, setCommentsUrl] = useState('');
    const [viewsUrl, setViewsUrl] = useState('');
    
        
    const { addToCart } = useStateContext();

    const handleLikesUrl = (e) => {
        setLikesUrl(e.target.value);
    }
    
    const handleFollowersUrl = (e) => {
        setFollowersUrl(e.target.value);
    }

    const handleCommentsUrl = (e) => {
        setCommentsUrl(e.target.value);
    }

    const handleViewsUrl = (e) => {
        setViewsUrl(e.target.value);
    }

    const handleSelectLikes = (e) => {
        setSelectLikes(e.target.value)
    }

    const handleSelectFollowers = (e) => {
        setSelectFollowers(e.target.value)
    }

    const handleSelectComments = (e) => {
        setSelectComments(e.target.value)
    }

    const handleSelectViews = (e) => {
        setSelectViews(e.target.value)
    }

    const addToCartBtn = (url,select, voucherCode, voucherName, setSelect, setSelectMsg, setUrl ) => {
        if(/^https:\/\//i.test(url) && /select/ig.test(select) === false ){
            addToCart(url, select,voucherCode, voucherName);
            setSelect(setSelectMsg)
            setUrl('');

        }else{
            toast.error('link should start with https:// & a value must be chosen')
        }
    }
    
  return (
  <div className="flex flex-col items-center mt-28 px-10 relative">
    <h1 className="text-xl font-semibold">Våra Instagram-paket</h1>
    <p className="mt-4">Vi är svenskarnas föredragna leverantör & Vi är stolta över att du väljer oss framför våra konkurrenter.</p>
    <div className="flex flex-col md2:flex-row">
        <div className="flex flex-col sm:gap-x-10 md:mt-10 md:gap-x-0 md:flex-row">

            <div className="flex flex-col items-center justify-around mr-4">
                <Image src={likes} alt='likes' className="h-28 w-28 md:w-32 md:h-32 md2:w-36 md2:h-36"  />
                <h1 className="text-xl">Likes</h1>
                <select className="border-2 border-black bg-slate-200 rounded-md cursor-pointer" value={selectLikes} onChange={handleSelectLikes}>
                    <option>Select Likes</option>
                    {instaLikes.map(el => (
                        <option key={el.value} value={[el.value,el.price]}>{`${el.value} - ${el.price}SEK`}</option>
                    ))}
                </select>
                    <div>
                        <label className="text-sm" htmlFor="url">Enter the URL to the post: &nbsp;</label>
                        <span className="px-2 bg-beige rounded-full urlTooltip">?</span>
                    </div>
                    <input type='text' className="border-2 border-black bg-slate-100 rounded-lg px-2" placeholder={!likesUrl?'URL':likesUrl} value={!likesUrl?'':likesUrl} onChange={handleLikesUrl}/>
                    <button className="bg-green px-4 py-2 rounded-md m-2" onClick={()=> addToCartBtn(likesUrl,selectLikes, 'instaLikes', 'Instagram Likes', setSelectLikes, 'Select likes', setLikesUrl)}>Add to cart</button>
            </div>

            <div className="flex flex-col items-center justify-around mr-4">
                <Image src={followers} alt='followers' className="h-28 w-28 md:w-32 md:h-32 md2:w-36 md2:h-36"  />
                <h1 className="text-xl">Followers</h1>
                <select className="border-2 border-black bg-slate-200 rounded-md cursor-pointer" value={selectFollowers} onChange={handleSelectFollowers}>
                    <option>Select Followers</option>
                    {instaFollowers.map(el => (
                        <option key={el.value} value={[el.value,el.price]}>{`${el.value} - ${el.price}SEK`}</option>
                    ))}
                </select>
                <div>
                        <label className="text-sm" htmlFor="url">Enter the URL to the post: &nbsp;</label>
                        <span className="px-2 bg-beige rounded-full urlTooltip">?</span>
                    </div>
                    <input type='text' className="border-2 border-black bg-slate-100 rounded-lg px-2" placeholder={!followersUrl?'URL':followersUrl} value={!followersUrl?'':followersUrl} onChange={handleFollowersUrl}/>
                    <button className="bg-green px-4 py-2 rounded-md m-2" onClick={()=> addToCartBtn(followersUrl,selectFollowers, 'instaFollowers', 'Instagram Comments', setSelectFollowers, 'Select followers', setFollowersUrl)}>Add to cart</button>

            </div>

        </div>

        <div className="flex flex-col sm:gap-x-10 md:mt-10 md:gap-x-0 md:flex-row">

            <div className="flex flex-col items-center justify-around mr-4">
                <Image src={comments} alt='comments' className="w-28 h-28 md:w-32 md:h-32 md2:w-36 md2:h-36"  />
                <h1 className="text-xl">Comments:</h1>
                <select className="border-2 border-black bg-slate-200 rounded-md cursor-pointer" value={selectComments} onChange={handleSelectComments}>
                    <option>Select Comments:</option>
                    {instaComments.map(el => (
                        <option key={el.value} value={[el.value,el.price]}>{`${el.value} - ${el.price}SEK`}</option>
                    ))}
                </select>
                    <div>
                        <label className="text-sm" htmlFor="url">Enter the URL to the post: &nbsp;</label>
                        <span className="px-2 bg-beige rounded-full urlTooltip">?</span>
                    </div>
                    <input type='text' className="border-2 border-black bg-slate-100 rounded-lg px-2" placeholder={!commentsUrl?'URL':commentsUrl} value={!commentsUrl?'':commentsUrl} onChange={handleCommentsUrl}/>
                    <button className="bg-green px-4 py-2 rounded-md m-2" onClick={()=> addToCartBtn(commentsUrl,selectComments, 'instaComments', 'Instagram Comments', setSelectComments, 'Select comments', setCommentsUrl)}>Add to cart</button>
            </div>

            <div className="flex flex-col items-center justify-around">
                <Image src={views} alt='views' className="h-28 w-28 md:w-32 md:h-32 md2:w-36 md2:h-36"  />
                <h1 className="text-xl">views</h1>
                <select className="border-2 border-black bg-slate-200 rounded-md cursor-pointer" value={selectViews} onChange={handleSelectViews}>
                    <option>Select views</option>
                    {instaViews.map(el => (
                        <option key={el.value} value={[el.value,el.price]}>{`${el.value} - ${el.price}SEK`}</option>
                    ))}
                </select>
                    <div>
                        <label className="text-sm" htmlFor="url">Enter the URL to the post: &nbsp;</label>
                        <span className="px-2 bg-beige rounded-full urlTooltip">?</span>
                    </div>
                    <input type='text' className="border-2 border-black bg-slate-100 rounded-lg px-2" placeholder={!viewsUrl?'URL':viewsUrl} value={!viewsUrl?'':viewsUrl} onChange={handleViewsUrl}/>
                    <button className="bg-green px-4 py-2 rounded-md m-2" onClick={()=> addToCartBtn(viewsUrl,selectViews, 'instaViews', 'Instagram views', setSelectViews, 'Select views', setViewsUrl)}>Add to cart</button>
            </div>
            
        </div>
    </div>

  </div>
  )
};

export default Instagram;
