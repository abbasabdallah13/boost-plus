import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import sliderImg1 from '../../assets/carouselImg.png';
import sliderImg2 from '../../assets/carouselImg1.png'
import sliderImg3 from '../../assets/carouselImg2.png';
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
      className="shadow-lg mt-4">
        <div className="flex items-center p-2 sm:gap-4 sm:p-4 md:justify-around">
          <Image src={sliderImg1} className="w-40 h-40 sm:w-46 sm:h-46 md:w-56 md:h-56 lg:w-72 lg:h-72  " alt='slider img 1'   />
          <div className="flex flex-col">
            <h1 className="font-zen-kaku font-bold text-xl md2:text-2xl lg:text-3xl text-center">Automatiska gilla varje gång du postar</h1>
            <p className="font-heebo font-light text-center text-sm md2:text-xl lg:text-2xl mt-2 md2:mt-6 lg:mt-10 ">du får likes varje gång du lägger upp ett inlägg på Instagram.</p>
          </div>
        </div>


        <div className="flex p-4 gap-2 h-full">
          <div className="flex flex-col items-center justify-center w-3/5">
            <h1 className="font-zen-kaku font-bold text-center text-lg md:text-xl md2:text-2xl lg:text-3xl">Snabb leverans inom 5 min-24 timmar</h1>
            <p className="font-heebo font-light text-center text-xs md:text-lg md2:text-xl lg:text-2xl mt-2 md:mt-6">Vårt system levererar automatiskt alla tjänster inom 5 minuter till 24 timmar. Oavsett vilken tid du beställer.</p>
          </div>
          <div className="flex justify-center items-center w-2/5">
            <Image src={sliderImg3} className='w-32 h-24 md:w-56 md:h-48 md:relative lg:w-64 lg:h-56' alt='slider Img3' />
          </div>          
        </div>

        <div className="bg-blue text-white flex p-4 h-full">
          <div className="flex flex-col items-center justify-center w-3/5">
            <h1 className="font-zen-kaku font-bold text-center text-lg md:text-xl md2:text-2xl lg:text-3xl">Betala enkelt och säkert Godkänd betalning</h1>
            <p className="font-heebo font-light text-center text-xs md:text-lg md2:text-xl lg:text-2xl mt-2 md:mt-6">Godkända och säkra betalningsmetoder, betala säkert och enkelt med bara några klick..</p>
          </div>
          <div className="flex justify-center items-center w-2/5">
            <Image className="w-24 sm:w-28 h-24 sm:h-28 md:w-56 md:h-56" src={sliderImg2} alt='slider img2' />
          </div>
        </div>
    </Carousel>
  )
};

export default ImageSlider;
