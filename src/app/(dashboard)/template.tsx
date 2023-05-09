import Image from "next/image";
import logoImage from '../../../public/logo.svg';
import userImage from '../../../public/user.png';
import { LayoutDashboard, BarChart, Wallet, Landmark, ShoppingBag, Cog, HelpCircle, ChevronDown } from "lucide-react";

export default function Template({ children, }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen bg-neutral-50">
      <div className="flex">
        <aside className="w-72 bg-black/90 h-screen flex flex-col border-r-2 border-r-stone-700">
          <div className="w-full h-20 grid items-center border-b border-b-stone-800">
            <Image src={logoImage} alt="Logom image" className="w-18 h-8" />
          </div>

          <div className="flex-1">
            <nav className="mt-8">
              <div className="list-none text-white space-y-6">
                <a href="/dashboard" className="hover:text-zinc-400 hover:border-l-2 border-white cursor-pointer font-light pl-6 flex items-center gap-3">
                  <LayoutDashboard />
                  Dashboard
                </a>
                <a href="/analities" className="hover:text-zinc-400 hover:border-l-2 border-white cursor-pointer font-light pl-6 flex items-center gap-3">
                  <BarChart />
                  Análise
                </a>
                <a href="/payments" className="hover:text-zinc-400 hover:border-l-2 border-white cursor-pointer font-light pl-6 flex items-center gap-3">
                  <Landmark />
                  Pagamentos
                </a>
                <a href="" className="hover:text-zinc-400 hover:border-l-2 border-white cursor-pointer font-light pl-6 flex items-center gap-3">
                  <Wallet />
                  Carteira
                </a>
                <a href="" className="hover:text-zinc-400 hover:border-l-2 border-white cursor-pointer font-light pl-6 flex items-center gap-3">
                  <ShoppingBag />
                  Lista de Compras
                </a>
              </div>
            </nav>

            <nav className="mt-10 pt-10 border-t border-zinc-800">
              <ul className="list-none text-white space-y-6">
                <li className="hover:text-zinc-400 hover:border-l-2 border-white cursor-pointer font-light pl-6 flex items-center gap-3">
                  <HelpCircle />
                  Ajuda
                </li>
                <li className="hover:text-zinc-400 hover:border-l-2 border-white cursor-pointer font-light pl-6 flex items-center gap-3">
                  <Cog />
                  Configurações
                </li>
              </ul>
            </nav>
          </div>

          <div className="text-white h-28 border-t border-zinc-800 grid grid-cols-1 items-center">
            <div className="flex items-center gap-3 pl-6">
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
        <div className="flex-1">
          <header className="w-full h-20 grid items-center justify-items-center bg-white border-b border-zinc-300">
            <div className="w-10/12 h-10 flex justify-between pl-1 pr-1">
              <input type="text" placeholder="Pesquisar" className="w-96 h-10 rounded bg-zinc-400/20 pl-3 outline-none border border-zinc-700/20 text-black" />
              <div className="flex items-center">
                <Image src={userImage} alt="User image" className="rounded-full h-10 w-10" />
                <ChevronDown />
              </div>
            </div>
          </header>
          <main>
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}