import React from "react";
import boy from '../assets/boy.png';
import girl from '../assets/girl.png';
import stars from '../assets/stars.png';
import Image from "next/image";

const Feedbacks = () => {

    const users = [
        {
            name: 'Martin Govic',
            gender: 'boy',
            image: boy,
            feedback: 'Bra service Fick ännu fler följare än jag betalade för och det gick supersnabbt'
        },
        {
            name: 'Laura Mattis',
            gender: 'girl',
            image: girl,
            feedback: '"Tack så mycket nu är jag känd hehe !!"'
        }]
  return (
  <div className="flex flex-col justify-center">

    <div className="bg-pink px-8 py-4">
        
        <h1 className="text-2xl font-semibold text-white">Vad säger våra kunder?</h1>
        
        {
            users.map(el => (
                <div className="flex items-center gap-4 mt-4">
                        <Image className="w-16 h-16 " src={el.image} alt={el.name} />
                    <div>
                       <h1 className="text-white text-xl">{el.name}</h1>
                       <Image src={stars} alt='stars' />
                        <p className="text-sm text-white">"{el.feedback}</p>
                    </div>
                </div>
            ))
        }

    </div>
    <div className="p-4 bg-pink text-white">
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
        <textarea className="border-black border-2 w-full text-black p-2"></textarea>
        <button className="border-2 border-black px-2 bg-white text-pink">Submit</button>
    </div>
  </div>
  )
};

export default Feedbacks;
