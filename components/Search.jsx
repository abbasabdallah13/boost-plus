import React from "react";
import searchIcon from '../assets/search.png'
import Image from "next/image";

const Search = () => {
  return (
  <div className="p-2 relative flex items-center mt-28">
      <input type='text' placeholder="Looking to boost what page ?"  className="bg-zinc-100 w-full p-2 h-8 rounded-lg shadow-lg" />
      <Image src={searchIcon} alt='search icon' className=" absolute right-4  w-6 h-6" />      
  </div>
  )
};

export default Search;
