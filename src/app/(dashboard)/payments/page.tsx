import Image from 'next/image';
import codBarras from '../../../../public/cod-barras.svg';
import { Plus } from 'lucide-react';

export default function Payments() {
  return (
    <section className="w-full h-52 mt-8">
      <div className="m-auto xl:w-10/12 2xl:w-6/12 w-10/12">
        <div className=''>
          <h2 className='text-2xl'>Olá, <strong>Diego</strong></h2>
          <p className='mt-1 text-lg'>Mantenha suas contas em dia</p>
        </div>

        <div className="w-full h-20 mt-8 p-5 rounded items-center pl-10 text-white flex gap-5 bg-zinc-800">
          <Image src={codBarras} alt="Imagem de código do barras" />
          <span className='text-lg'>Você têm <strong>14 boletos</strong> cadastrados para pagar</span>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <p className="text-2xl font-semibold">Meus boletos</p>
          <button className="w-48 h-11 bg-black text-white font-semibold rounded flex gap-1 justify-center items-center">
            <Plus />
            Adicionar boleto
          </button>
        </div>

        <div className="w-full mt-8">
          <ul className="grid grid-cols-1 gap-1 text-zinc-600">
            <li className="grid grid-cols-3 bg-white p-3 rounded border border-zinc-200/80 cursor-pointer hover:bg-slate-300/30">
              <span className='font-semibold'>Compras do mês</span>
              <span className="flex justify-end">Vence em 16/03/21</span>
              <span className="flex justify-end font-bold">R$ 1.764,90</span>
            </li>

            <li className="grid grid-cols-3 bg-white p-3 rounded  border border-zinc-200/80 cursor-pointer hover:bg-slate-300/30">
              <span className='font-semibold'>Parcela notebook</span>
              <span className="flex justify-end">Vence em 16/03/21</span>
              <span className="flex justify-end font-bold">R$ 564,90</span>
            </li>

            <li className="grid grid-cols-3 bg-white p-3 rounded  border border-zinc-200/80 cursor-pointer hover:bg-slate-300/30">
              <span className='font-semibold'>Parcela celular</span>
              <span className="flex justify-end">Vence em 16/03/21</span>
              <span className="flex justify-end font-bold">R$ 764,90</span>
            </li>

            <li className="grid grid-cols-3 bg-white p-3 rounded  border border-zinc-200/80 cursor-pointer hover:bg-slate-300/30">
              <span className='font-semibold'>Compras do mês</span>
              <span className="flex justify-end">Vence em 16/03/21</span>
              <span className="flex justify-end font-bold">R$ 1.764,90</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}