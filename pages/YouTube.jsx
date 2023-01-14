import {React, useState} from "react";
import { useStateContext } from "../context/StateContext";
import { youtubeComments, youtubeViews, youtubeLikes, youtubeSubscribers } from "../lib/data";
import Image from "next/image";
import youtubeCommentsImg from '../assets/youtubeComments.png'
import youtubeLikesImg from '../assets/youtubeLikes.png'
import youtubeSubscribersImg from '../assets/youtubeSubscribers.png'
import youtubeViewsImg from '../assets/youtubeViews.png'
import { toast } from "react-hot-toast";


const YouTube = () => {
    const [selectLikes, setSelectLikes] = useState([]);
    const [selectComments, setSelectComments] = useState([]);  
    const [selectSubscribers, setSelectSubscribers] = useState([]);
    const [selectViews, setSelectViews] = useState([]);
    
    
    
    const [likesUrl, setLikesUrl] = useState('');
    const [commentsUrl, setCommentsUrl] = useState('');
    const [subscribersUrl, setSubscribersUrl] = useState('');
    const [viewsUrl, setViewsUrl] = useState('');

    const { addToCart } = useStateContext();

    const handleSelectLikes = (e) => {
        setSelectLikes(e.target.value)
    }

    const handleSelectComments = (e) => {
        setSelectComments(e.target.value)
    }

    const handleSelectSubscribers = (e) => {
        setSelectSubscribers(e.target.value);
    }

    const handleSelectViews = (e) => {
        setSelectViews(e.target.value)
    }

    const handleLikesUrl = (e) => {
        setLikesUrl(e.target.value);
    }

    const handleCommentsUrl = (e) => {
        setCommentsUrl(e.target.value);
    }  
    
    const handleSubscribersUrl = (e) => {
        setSubscribersUrl(e.target.value);
    }

    const handleViewsUrl = (e) => {
        setViewsUrl(e.target.value);
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
    <h1 className="text-xl font-semibold">Våra YouTube-paket</h1>
    <p className="mt-4">Vi är svenskarnas föredragna leverantör & Vi är stolta över att du väljer oss framför våra konkurrenter.</p>
    <div className="flex flex-col md2:flex-row">
        <div className="flex flex-col sm:gap-x-10 md:mt-10 md:gap-x-0 md:flex-row">

            <div className="flex flex-col items-center justify-around mr-4">
                <Image src={youtubeCommentsImg} alt='youtube comments' className="h-28 w-28 md:w-32 md:h-32 md2:w-36 md2:h-36"  />
                <h1 className="text-xl">Youtube Comments:</h1>
                <select className="border-2 border-black bg-slate-200 rounded-md cursor-pointer" value={selectComments} onChange={handleSelectComments}>
                    <option>Select Comments</option>
                    {youtubeComments.map(el => (
                        <option key={el.value} value={[el.value,el.price]}>{`${el.value} - ${el.price}SEK`}</option>
                    ))}
                </select>
                    <div>
                        <label className="text-sm" htmlFor="url">Enter the URL to the post: &nbsp;</label>
                        <span className="px-2 bg-beige rounded-full urlTooltip">?</span>
                    </div>
                    <input type='text' className="border-2 border-black bg-slate-100 rounded-lg px-2" placeholder={!commentsUrl?'URL':commentsUrl} value={!commentsUrl?'':commentsUrl} onChange={handleCommentsUrl}/>
                    <button className="bg-green px-4 py-2 rounded-md m-2" onClick={()=> addToCartBtn(commentsUrl,selectComments, 'youtubeComments', 'YouTube Comments', setSelectComments, 'Select Comments', setCommentsUrl)}>Add to cart</button>
            </div>

            <div className="flex flex-col items-center justify-around mr-4">
                <Image src={youtubeLikesImg} alt='likes' className="h-28 w-28 md:w-32 md:h-32 md2:w-36 md2:h-36"  />
                <h1 className="text-xl">YouTube Likes:</h1>
                <select className="border-2 border-black bg-slate-200 rounded-md cursor-pointer" value={selectLikes} onChange={handleSelectLikes}>
                    <option>Select Likes</option>
                    {youtubeLikes.map(el => (
                        <option key={el.value} value={[el.value,el.price]}>{`${el.value} - ${el.price}SEK`}</option>
                    ))}
                </select>
                <div>
                        <label className="text-sm" htmlFor="url">Enter the URL to the post: &nbsp;</label>
                        <span className="px-2 bg-beige rounded-full urlTooltip">?</span>
                    </div>
                    <input type='text' className="border-2 border-black bg-slate-100 rounded-lg px-2" placeholder={!likesUrl?'URL':likesUrl} value={!likesUrl?'':likesUrl} onChange={handleLikesUrl}/>
                    <button className="bg-green px-4 py-2 rounded-md m-2" onClick={()=> addToCartBtn(likesUrl,selectLikes, 'youtubeLikes', 'YouTube Likes', setSelectLikes, 'Select Likes', setLikesUrl)}>Add to cart</button>

            </div>

        </div>

        <div className="flex flex-col sm:gap-x-10 md:mt-10 md:gap-x-0 md:flex-row">

            <div className="flex flex-col items-center justify-around mr-4">
                <Image src={youtubeViewsImg} alt='views' className="w-28 h-28 md:w-32 md:h-32 md2:w-36 md2:h-36"  />
                <h1 className="text-xl">YouTube Views:</h1>
                <select className="border-2 border-black bg-slate-200 rounded-md cursor-pointer" value={selectViews} onChange={handleSelectViews}>
                    <option>Select Views:</option>
                    {youtubeViews.map(el => (
                        <option key={el.value} value={[el.value,el.price]}>{`${el.value} - ${el.price}SEK`}</option>
                    ))}
                </select>
                    <div>
                        <label className="text-sm" htmlFor="url">Enter the URL to the post: &nbsp;</label>
                        <span className="px-2 bg-beige rounded-full urlTooltip">?</span>
                    </div>
                    <input type='text' className="border-2 border-black bg-slate-100 rounded-lg px-2" placeholder={!viewsUrl?'URL':viewsUrl} value={!viewsUrl?'':viewsUrl} onChange={handleViewsUrl}/>
                    <button className="bg-green px-4 py-2 rounded-md m-2" onClick={()=> addToCartBtn(viewsUrl,selectViews, 'youtubeViews', 'YouTube Views', setSelectViews, 'Select Views', setViewsUrl)}>Add to cart</button>
            </div>

            <div className="flex flex-col items-center justify-around">
                <Image src={youtubeSubscribersImg} alt='views' className="h-20 w-32 md:w-40 md:h-28 md2:w-40 md2:h-28"  />
                <h1 className="text-xl">Subscribers:</h1>
                <select className="border-2 border-black bg-slate-200 rounded-md cursor-pointer" value={selectSubscribers} onChange={handleSelectSubscribers}>
                    <option>Select subscribers:</option>
                    {youtubeSubscribers.map(el => (
                        <option key={el.value} value={[el.value,el.price]}>{`${el.value} - ${el.price}SEK`}</option>
                    ))}
                </select>
                    <div>
                        <label className="text-sm" htmlFor="url">Enter the URL to the post: &nbsp;</label>
                        <span className="px-2 bg-beige rounded-full urlTooltip">?</span>
                    </div>
                    <input type='text' className="border-2 border-black bg-slate-100 rounded-lg px-2" placeholder={!subscribersUrl?'URL':subscribersUrl} value={!subscribersUrl?'':subscribersUrl} onChange={handleSubscribersUrl}/>
                    <button className="bg-green px-4 py-2 rounded-md m-2" onClick={()=> addToCartBtn(subscribersUrl,selectSubscribers, 'youtubeSubscribers', 'YouTube Subscribers', setSelectSubscribers, 'Select subscribers', setSubscribersUrl)}>Add to cart</button>
            </div>
            
        </div>
    </div>

  </div>
  )
};

export default YouTube;
