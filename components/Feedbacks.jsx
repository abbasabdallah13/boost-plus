import React from "react";
import boy from '../assets/boy.png';
import girl from '../assets/girl.png';
import stars from '../assets/stars.png';
import Image from "next/image";

const Feedbacks = () => {
  return (
  <div className="flex flex-col justify-center">
    <div className=" bg-pink px-8 py-4">
        <h1 className="text-2xl font-semibold text-white">Vad säger våra kunder?</h1>
        <div className="flex-col items-center gap-4 mt-4">
            <div className="flex items-center justify-around">
                <Image className="w-16 h-16" src={boy} alt='boy' />
                <div className="flex-col">
                    <h1 className="text-white text-xl">Martin Govic</h1>
                    <Image src={stars} alt='stars' />
                </div>
            </div>
            <div className="text-center mt-2">
                <p className="text-sm text-white">"Bra service Fick ännu fler följare än jag betalade för och det gick supersnabbt"</p>
            </div>
        </div>

    {/* only the below div should be deleted once data is received from database */}
        <div className="flex-col items-center gap-4 mt-8">
            <div className="flex items-center justify-around">
                <Image className="w-16 h-16" src={girl} alt='girl' />
                <div className="flex-col">
                    <h1 className="text-white text-xl">Laura Mattis</h1>
                    <Image src={stars} alt='stars' />
                </div>
            </div>
            <div className="text-center mt-2">
                <p className="text-sm text-white">"Tack så mycket nu är jag känd hehe !!"</p>
            </div>
        </div>
    </div>
    <div className="p-4">
        <h1 className="text-2xl font-semibold">Provide Feedback</h1>
        <p className="ml-2 mb-4 mt-2">send feedback in case you tried our service and we will post it here with your name once approved</p>
        <label htmlFor="gender">Gender</label>
        <div>
            <input type={'radio'} value='male' />
            <label htmlFor="male">Male</label>

            <input className="ml-2" type={'radio'} value='male' />
            <label htmlFor="female">Female</label>
        </div>
        <h1 className="text-xl font-semibold mt-4">Feedback:</h1>
        <textarea className="border-black border-2 w-full"></textarea>
        <button className="border-2 border-black px-2">Submit</button>
    </div>
  </div>
  )
};

export default Feedbacks;
