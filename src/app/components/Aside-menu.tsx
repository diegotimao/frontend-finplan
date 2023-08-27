'use client'

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import logoImage from '../../../public/logo.svg';
import userImage from '../../../public/user.png';
import { LayoutDashboard, Landmark, Wallet, ShoppingBag, HelpCircle, Cog, ChevronDown } from 'lucide-react';

export default function AsideMenu() {
  const router = useRouter();
  const pathName = usePathname();
  
  return (
    <aside className="w-72 bg-black/80 h-screen flex flex-col border-r-2 border-r-stone-700">
          <div className="w-full h-20 grid items-center border-b border-b-stone-800">
            <Image src={logoImage} alt="Logom image" className="w-18 h-6" />
          </div>
          <div className="flex-1">
            <nav className="mt-8">
              <div className="list-none text-white space-y-6">
                <a 
                  onClick={() => router.push('/dashboard')} 
                  className={`hover:text-zinc-400 cursor-pointer font-light pl-6 flex items-center-3 gap-3
                    ${pathName === '/dashboard' ? `border-l-2 border-white text-zinc-400` : ''}`}
                >
                  <LayoutDashboard />
                  Dashboard
                </a>
                <a
                  onClick={() => router.push('/payments')}
                  className={`hover:text-zinc-400 cursor-pointer font-light pl-6 flex items-center gap-3 
                    ${pathName === '/payments' ? `border-l-2 border-white text-zinc-400` : ''}`}
                >
                  <Landmark />
                  Pagamentos
                </a>
                <a
                  onClick={() => router.push('/carteira')}
                  className={`hover:text-zinc-400 cursor-pointer font-light pl-6 flex items-center gap-3 
                    ${pathName === '/carteira' ? `border-l-2 border-white text-zinc-400` : ''}`}
                >
                  <Wallet />
                  Carteira
                </a>
                <a
                  onClick={() => router.push('/compras')}
                  className={`hover:text-zinc-400 cursor-pointer font-light pl-6 flex items-center gap-3
                    ${pathName === '/compras' ? `border-l-2 border-white text-zinc-400` : ''}`}
                >
                  <ShoppingBag />
                  Lista de Compras
                </a>
              </div>
            </nav>

            <nav className="mt-10 pt-10 border-t border-zinc-800">
              <ul className="list-none text-white space-y-6">
                <li
                  className="hover:text-zinc-400 hover:border-l-2 border-white cursor-pointer font-light pl-6 flex items-center gap-3"
                >
                  <HelpCircle />
                  Ajuda
                </li>
                <li
                  className="hover:text-zinc-400 hover:border-l-2 border-white cursor-pointer font-light pl-6 flex items-center gap-3"
                >
                  <Cog />
                  Configurações
                </li>
              </ul>
            </nav>
          </div>

          <div className="text-white h-28 border-t border-zinc-800 grid grid-cols-1 items-center">
            <div className="flex items-center gap-3 pl-6 hover:bg-black/17">
              <Image src={userImage} alt="User image" className="rounded-full h-10 w-10" />
              <div className="grid grid-cols-1">
                <div className="flex items-center gap-2">
                  <p>Diego Santos</p>
                  <ChevronDown />
                </div>
                <p className="font-light text-sm">diegotimao1104@gmail.com</p>
              </div>
            </div>
          </div>
        </aside>
  )
};