import Image from 'next/image';
import codBarras from '../../../../public/cod-barras.svg';
import { Plus } from 'lucide-react';
import ListPyments from '@/app/components/ListPyments';

export default function Payments() {
  return (
    <section className="w-full h-52 mt-8">
      <div className="m-auto xl:w-10/12 2xl:w-6/12  w-10/12">
        <div className="w-full h-20 mt-8 p-5 rounded items-center pl-10 text-white flex gap-5 bg-zinc-800">
          <Image src={codBarras} alt="Imagem de código do barras" />
          <div className=''>
            <span className='text-md'>Olá <strong>Diego</strong>, mantenha suas contas em dia você têm <strong>14 boletos</strong> cadastrados para pagar</span>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <p className="text-2xl font-semibold">Meus boletos</p>
          <button className="w-48 h-11 bg-black text-white font-semibold rounded flex gap-1 justify-center items-center">
            <Plus />
            Adicionar boleto
          </button>
        </div>

        <div className="w-full mt-8">
          <ListPyments />
        </div>
      </div>
    </section>
  )
};