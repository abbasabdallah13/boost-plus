import React from "react";
import four from '../assets/4.png';
import Image from 'next/image';

const Steps = () => {
  return (
  <div className="flex flex-col items-center mt-20 sm:flex-row">
    <div className="w-1/2 flex flex-col items-center">
        <Image src={four} alt='4' className="sm:ml-4 max-w-[200px]"   />
        <h1 className="font-bold text-2xl">Easy Steps</h1>
    </div>
    <div className="p-4">
        <h1 className="font-bold">1- Välj En Tjänst</h1>
        <p className="text-sm my-2 mx-2 ">Börja med att hitta den tjänst
    du skulle vilja köpa.</p>

        <h1 className="font-bold">2- Länk / Användarnamn</h1>
        <p className="text-sm my-2 mx-2 ">Lägg till länk / användarnamnet och välj antalet du önskar.</p>
        
        <h1 className="font-bold">3- Beställ & Betala</h1>
        <p className="text-sm my-2 mx-2 ">Beställ din tjänst. Du kan betala enkelt & säkert.</p>

        <h1 className="font-bold">4- Vi levererar på 5 min - 24 timmar</h1>
        <p className="text-sm my-2 mx-2 ">Vårt system levererar automatiskt tjänsten inom 5 min till 24 timmar</p>
    </div>
  </div>)
};

export default Steps;
