import {React, useState} from "react";
import { useStateContext } from "../context/StateContext";
import { twitterLikes, twitterFollowers } from "../lib/data";
import Image from "next/image";
import twitterLikesImg from '../assets/twitterLikes.png';
import twitterFollowersImg from '../assets/twitterFollowers.png';
import { toast } from "react-hot-toast";
import Script from "next/script";



const Twitter = () => {
    const [selectLikes, setSelectLikes] = useState([]);
    const [selectFollowers, setSelectFollowers] = useState([]);
    
    
    const [likesUrl, setLikesUrl] = useState('');
    const [followersUrl, setFollowersUrl] = useState('');

    const { addToCart } = useStateContext();

    const handleSelectLikes = (e) => {
        setSelectLikes(e.target.value)
    }

    const handleSelectFollowers = (e) => {
        setSelectFollowers(e.target.value)
    }


    const handleLikesUrl = (e) => {
        setLikesUrl(e.target.value);
    }

    const handleFollowersUrl = (e) => {
        setFollowersUrl(e.target.value);
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
    <div className="flex flex-col items-center mt-28 px-10 relative lg:h-fit lg:min-h-[70vh]">
        <Script type="text/javascript" strategy="lazyOnload">{`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/63d96f35c2f1ac1e2030a97f/1go4lkqm2';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            window.Tawk_API = window.Tawk_API || {};
            window.Tawk_API.customStyle = {
            zIndex : 49 
            };
            })();
            `}
    </Script>
  
        <h1 className="text-xl font-zen-kaku font-semibold">Våra Twitter-paket</h1>
    
        <p className="mt-4 font-heebo">Vi är svenskarnas föredragna leverantör & Vi är stolta över att du väljer oss framför våra konkurrenter.</p>
    
        <div className="flex flex-col md2:flex-row">
            <div className="flex flex-col sm:gap-x-10 md:mt-10 md:gap-x-0 md:flex-row">

                <div className="flex flex-col items-center justify-around mr-4">
                    <Image src={twitterLikesImg} alt='twitter likes' className="w-20 h-20 sm:h-28 sm:w-28 md:w-32 md:h-32 md2:w-36 md2:h-36"  />
                    <h1 className="text-xl font-zen-kaku font-semibold mb-2">Twitter Likes</h1>
                    <select className="px-2 border-2 border-black bg-slate-200 rounded-md cursor-pointer font-heebo" value={selectLikes} onChange={handleSelectLikes}>
                        <option>Select Likes</option>
                        {twitterLikes.map(el => (
                            <option key={el.value} value={[el.value,el.price]}>{`${el.value} - ${el.price}SEK`}</option>
                        ))}
                    </select>
                        <div>
                            <label className="text-sm font-heebo" htmlFor="url">Enter the URL to the post: &nbsp;</label>
                            <span className="px-2 bg-beige rounded-full urlTooltip font-heebo">?</span>
                        </div>
                        <input type='text' className="border-2 border-black bg-slate-100 rounded-lg px-2 font-heebo" placeholder={!likesUrl?'URL':likesUrl} value={!likesUrl?'':likesUrl} onChange={handleLikesUrl}/>
                        <button className="bg-green px-4 py-2 rounded-md m-2 font-zen-kaku font-semibold" onClick={()=> addToCartBtn(likesUrl,selectLikes, 'twitterLikes', 'Twitter Likes', setSelectLikes, 'Select Likes', setLikesUrl)}>Add to cart</button>
                </div>

                <div className="flex flex-col items-center justify-around mr-4">
                    <Image src={twitterFollowersImg} alt='twitter followers' className="w-20 h-20 sm:h-28 sm:w-28 md:w-32 md:h-32 md2:w-36 md2:h-36"  />
                    <h1 className="text-xl font-zen-kaku font-semibold mb-2">Twitter Followers</h1>
                    <select className="px-2 border-2 border-black bg-slate-200 rounded-md cursor-pointer font-heebo" value={selectFollowers} onChange={handleSelectFollowers}>
                        <option>Select followers</option>
                        {twitterFollowers.map(el => (
                            <option key={el.value} value={[el.value,el.price]}>{`${el.value} - ${el.price}SEK`}</option>
                        ))}
                    </select>
                        <div>
                            <label className="text-sm font-heebo" htmlFor="url">Enter the URL to the post: &nbsp;</label>
                            <span className="px-2 bg-beige rounded-full urlTooltip font-heebo">?</span>
                        </div>
                        <input type='text' className="border-2 border-black bg-slate-100 rounded-lg px-2 font-heebo" placeholder={!followersUrl?'URL':followersUrl} value={!followersUrl?'':followersUrl} onChange={handleFollowersUrl}/>
                        <button className="bg-green px-4 py-2 rounded-md m-2 font-zen-kaku font-semibold" onClick={()=>{addToCartBtn(followersUrl, selectFollowers,'twitterFollowers','Twitter Followers', setSelectFollowers,'Select followers', setFollowersUrl)}}>Add to cart</button>
                </div>

            </div>


        </div>

  </div>
  )
};

export default Twitter;
