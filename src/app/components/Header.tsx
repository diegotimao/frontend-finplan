import React from 'react';
import Image from 'next/image';
import userImage from '../../../public/user.png';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full h-20 grid items-center justify-items-center bg-white border-b border-zinc-300">
      <div className="w-10/12 h-20 m-auto xl:w-10/12 2xl:w-6/12 flex items-center justify-between pl-1 pr-1">
        <input type="text"
          placeholder="Pesquisar"
          className="w-96 h-10 rounded bg-zinc-400/20 pl-3 outline-none border border-zinc-700/20 text-black" 
        />
        <div className="flex items-center">
          <Image 
            src={userImage} 
            alt="User image" 
            className="rounded-full h-10 w-10"
          />
          <ChevronDown />
        </div>
      </div>
    </header>
  )
};