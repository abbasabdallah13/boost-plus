import {React, useState} from "react";
import { useStateContext } from "../context/StateContext";
import { tiktokComments, tiktokViews, tiktokLikes, tiktokShares } from "../lib/data";
import Image from "next/image";
import tiktokCommentsImg from '../assets/tiktokComments.png'
import tiktokLikesImg from '../assets/tiktokLikes.png'
import tiktokSharesImg from '../assets/tiktokShares.png'
import tiktokViewsImg from '../assets/tiktokViews.png'
import { toast } from "react-hot-toast";


const Tiktok = () => {
    const [selectLikes, setSelectLikes] = useState([]);
    const [selectComments, setSelectComments] = useState([]);  
    const [selectShares, setSelectShares] = useState([]);
    const [selectViews, setSelectViews] = useState([]);
    
    
    
    const [likesUrl, setLikesUrl] = useState('');
    const [commentsUrl, setCommentsUrl] = useState('');
    const [sharesUrl, setSharesUrl] = useState('');
    const [viewsUrl, setViewsUrl] = useState('');

    const { addToCart } = useStateContext();

    const handleSelectLikes = (e) => {
        setSelectLikes(e.target.value)
    }

    const handleSelectComments = (e) => {
        setSelectComments(e.target.value)
    }

    const handleSelectShares = (e) => {
        setSelectShares(e.target.value);
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
    
    const handleSharesUrl = (e) => {
        setSharesUrl(e.target.value);
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
    <h1 className="text-xl font-semibold">Våra Tiktok-paket</h1>
    <p className="mt-4">Vi är svenskarnas föredragna leverantör & Vi är stolta över att du väljer oss framför våra konkurrenter.</p>
    <div className="flex flex-col md2:flex-row">
        <div className="flex flex-col sm:gap-x-10 md:mt-10 md:gap-x-0 md:flex-row">

            <div className="flex flex-col items-center justify-around mr-4">
                <Image src={tiktokCommentsImg} alt='tiktok comments' className="h-28 w-28 md:w-32 md:h-32 md2:w-36 md2:h-36"  />
                <h1 className="text-xl">Comments</h1>
                <select className="border-2 border-black bg-slate-200 rounded-md cursor-pointer" value={selectComments} onChange={handleSelectComments}>
                    <option>Select Comments</option>
                    {tiktokComments.map(el => (
                        <option key={el.value} value={[el.value,el.price]}>{`${el.value} - ${el.price}SEK`}</option>
                    ))}
                </select>
                    <div>
                        <label className="text-sm" htmlFor="url">Enter the URL to the post: &nbsp;</label>
                        <span className="px-2 bg-beige rounded-full urlTooltip">?</span>
                    </div>
                    <input type='text' className="border-2 border-black bg-slate-100 rounded-lg px-2" placeholder={!commentsUrl?'URL':commentsUrl} value={!commentsUrl?'':commentsUrl} onChange={handleCommentsUrl}/>
                    <button className="bg-green px-4 py-2 rounded-md m-2" onClick={()=> addToCartBtn(commentsUrl,selectComments, 'tiktokComments', 'TikTok Comments', setSelectComments, 'Select Comments', setCommentsUrl)}>Add to cart</button>
            </div>

            <div className="flex flex-col items-center justify-around mr-4">
                <Image src={tiktokLikesImg} alt='likes' className="h-28 w-28 md:w-32 md:h-32 md2:w-36 md2:h-36"  />
                <h1 className="text-xl">Likes:</h1>
                <select className="border-2 border-black bg-slate-200 rounded-md cursor-pointer" value={selectLikes} onChange={handleSelectLikes}>
                    <option>Select Likes</option>
                    {tiktokLikes.map(el => (
                        <option key={el.value} value={[el.value,el.price]}>{`${el.value} - ${el.price}SEK`}</option>
                    ))}
                </select>
                <div>
                        <label className="text-sm" htmlFor="url">Enter the URL to the post: &nbsp;</label>
                        <span className="px-2 bg-beige rounded-full urlTooltip">?</span>
                    </div>
                    <input type='text' className="border-2 border-black bg-slate-100 rounded-lg px-2" placeholder={!likesUrl?'URL':likesUrl} value={!likesUrl?'':likesUrl} onChange={handleLikesUrl}/>
                    <button className="bg-green px-4 py-2 rounded-md m-2" onClick={()=> addToCartBtn(likesUrl,selectLikes, 'tiktokLikes', 'TikTok Likes', setSelectLikes, 'Select Likes', setLikesUrl)}>Add to cart</button>

            </div>

        </div>

        <div className="flex flex-col sm:gap-x-10 md:mt-10 md:gap-x-0 md:flex-row">

            <div className="flex flex-col items-center justify-around mr-4">
                <Image src={tiktokViewsImg} alt='views' className="w-28 h-28 md:w-32 md:h-32 md2:w-36 md2:h-36"  />
                <h1 className="text-xl">Views:</h1>
                <select className="border-2 border-black bg-slate-200 rounded-md cursor-pointer" value={selectViews} onChange={handleSelectViews}>
                    <option>Select Views:</option>
                    {tiktokViews.map(el => (
                        <option key={el.value} value={[el.value,el.price]}>{`${el.value} - ${el.price}SEK`}</option>
                    ))}
                </select>
                    <div>
                        <label className="text-sm" htmlFor="url">Enter the URL to the post: &nbsp;</label>
                        <span className="px-2 bg-beige rounded-full urlTooltip">?</span>
                    </div>
                    <input type='text' className="border-2 border-black bg-slate-100 rounded-lg px-2" placeholder={!viewsUrl?'URL':viewsUrl} value={!viewsUrl?'':viewsUrl} onChange={handleViewsUrl}/>
                    <button className="bg-green px-4 py-2 rounded-md m-2" onClick={()=> addToCartBtn(viewsUrl,selectViews, 'tiktokViews', 'TikTok Views', setSelectViews, 'Select Views', setViewsUrl)}>Add to cart</button>
            </div>

            <div className="flex flex-col items-center justify-around">
                <Image src={tiktokSharesImg} alt='views' className="h-28 w-28 md:w-32 md:h-32 md2:w-36 md2:h-36"  />
                <h1 className="text-xl">Shares:</h1>
                <select className="border-2 border-black bg-slate-200 rounded-md cursor-pointer" value={selectShares} onChange={handleSelectShares}>
                    <option>Select shares</option>
                    {tiktokShares.map(el => (
                        <option key={el.value} value={[el.value,el.price]}>{`${el.value} - ${el.price}SEK`}</option>
                    ))}
                </select>
                    <div>
                        <label className="text-sm" htmlFor="url">Enter the URL to the post: &nbsp;</label>
                        <span className="px-2 bg-beige rounded-full urlTooltip">?</span>
                    </div>
                    <input type='text' className="border-2 border-black bg-slate-100 rounded-lg px-2" placeholder={!sharesUrl?'URL':sharesUrl} value={!sharesUrl?'':sharesUrl} onChange={handleSharesUrl}/>
                    <button className="bg-green px-4 py-2 rounded-md m-2" onClick={()=> addToCartBtn(sharesUrl,selectShares, 'tiktokShares', 'TikTok Shares', setSelectShares, 'Select Shares', setSharesUrl)}>Add to cart</button>
            </div>
            
        </div>
    </div>

  </div>
  )
};

export default Tiktok;
