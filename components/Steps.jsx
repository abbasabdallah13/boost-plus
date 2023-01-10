import React from "react";
import one from '../assets/1.png';
import two from '../assets/2.png';
import three from '../assets/3.png';
import four from '../assets/4.png';
import Image from 'next/image';


const Steps = () => {
  return (
  <div className="flex flex-col items-center mt-5">
    
    <h1 className="text-2xl">4 Easy Steps:</h1>

    <div className="p-4">
        <div className="flex space-around">
          <div className="w-2/3 flex justify-center">
            <Image src={one} alt='1' />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-bold">Välj En Tjänst</h1>
            <p className="text-sm my-2 mx-2 ">Börja med att hitta den tjänst du skulle vilja köpa.</p>
          </div>
        </div>

        <div className="flex space-around mt-8">
          <div className="w-2/3 flex justify-center">
            <Image src={two} alt='1' />
          </div>
          <div className="flex flex-col justify-center">
             <h1 className="font-bold">Länk / Användarnamn</h1>
             <p className="text-sm my-2 mx-2 ">Lägg till länk / användarnamnet och välj antalet du önskar.</p>
          </div>
        </div>

        <div className="flex space-around mt-8">
          <div className="w-2/3 flex justify-center">
            <Image src={three} alt='1' />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-bold">Beställ & Betala</h1>
            <p className="text-sm my-2 mx-2 ">Beställ din tjänst. Du kan betala enkelt & säkert.</p>
          </div>
        </div>

        <div className="flex space-around mt-8">
          <div className="w-2/3 flex justify-center">
            <Image src={four} alt='1' />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-bold">Vi levererar på 5 min - 24 timmar</h1>
            <p className="text-sm my-2 mx-2 ">Vårt system levererar automatiskt tjänsten inom 5 min till 24 timmar</p>
          </div>
        </div>       

    </div>
  </div>)
};

export default Steps;
