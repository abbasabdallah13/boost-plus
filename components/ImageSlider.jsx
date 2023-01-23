import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import sliderImg1 from '../assets/carouselImg.png';
import sliderImg2 from '../assets/carouselImg1.png'
import sliderImg3 from '../assets/carouselImg2.png';
import Image from "next/image";


const ImageSlider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
    <Carousel 
      responsive={responsive}
      arrows={false}
      infinite
      autoPlay
      autoPlaySpeed={4000}
      showDots={true}
      className="shadow-lg mt-28">
        <div className="flex items-center p-2 sm:gap-4 sm:p-4 md:justify-around">
          <Image src={sliderImg1} className="w-40 h-40 sm:w-46 sm:h-46 md:w-56 md:h-56 lg:w-72 lg:h-72  " alt='slider img 1'   />
          <div className="flex flex-col">
            <h1 className="text-l font-bold sm:text-xl text-center md2:text-4xl">Automatiska gilla varje gång du postar</h1>
            <p className="text-sm text-center lg:mt-10 md2:text-2xl">du får likes varje gång du lägger upp ett inlägg på Instagram.</p>
          </div>
        </div>


        <div className="flex flex-col p-4 gap-2">
          <div className="flex items-center justify-between md:justify-around">
            <h1 className="text-xl font-bold text-center md:mb-10 md2:text-4xl">Snabb leverans inom 5 min-24 timmar</h1>
            <Image src={sliderImg3} className='w-32 h-24 md:w-56 md:h-48 md:relative lg:w-64 lg:h-56'   alt='slider Img3' />
          </div>
          <div>
            <p className="text-sm text-center md:w-1/3 md:relative md:bottom-20 md:left-20 lg:left-28 md2:text-2xl md2:left-40">Vårt system levererar automatiskt alla tjänster inom 5 minuter till 24 timmar. Oavsett vilken tid du beställer.</p>
          </div>          
        </div>

        <div className="bg-blue text-white flex-col p-4">
          <div className="flex items-center justify-between px-2 sm:px-10">
            <h1 className="text-l sm:text-2xl text-center mt-10 md2:text-4xl">Betala enkelt och säkert Godkänd betalning</h1>
            <Image className="w-24 sm:w-28 h-24 sm:h-28 md:w-56 md:h-56 mt-10" src={sliderImg2} alt='slider img2' />
          </div>
          <div className="mt-6 md:w-2/4 md:relative md:bottom-20 md:left-5">
            <p className=" text-sm text-center md2:text-xl sm:relative sm:left-6 md2:left-12">Godkända och säkra betalningsmetoder, betala säkert och enkelt med bara några klick..</p>
          </div>
        </div>
    </Carousel>
  )
};

export default ImageSlider;
