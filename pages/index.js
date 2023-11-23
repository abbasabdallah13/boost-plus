import React  from "react";
import { SwishBanner, ImageSlider, Steps, Offers, Feedbacks } from "../components/home components";
import Script from "next/script";

const index = () => {
  
  return (
  <div className="mt-36"> 
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
    {/* <Search /> */}
    {/* <SwishBanner /> */}
    <ImageSlider />
    <Steps />
    <Offers />
    {/* <Feedbacks /> */}
  </div>
  )
};

export default index;
