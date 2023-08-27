import React from 'react'

export default function ListPyments() {
  return (
    <ul className="grid grid-cols-1 gap-1 text-zinc-600">
      <li className="grid grid-cols-3 bg-white p-3 rounded border border-zinc-200/80 cursor-pointer hover:bg-slate-300/30">
        <span className="font-semibold">Compras do mês</span>
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
  )
};