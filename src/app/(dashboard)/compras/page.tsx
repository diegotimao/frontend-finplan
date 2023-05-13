import { Plus } from "lucide-react"

export default function Compras() {
  return (
    <section className="w-full h-52">
      <div className="mt-10 m-auto xl:w-10/12 2xl:w-6/12 w-10/12">
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 mt-4">
          <div className="h-28 rounded bg-slate-500/20"></div>
          <div className="h-28 rounded bg-slate-500/20"></div>
          <div className="h-28 rounded bg-slate-500/20"></div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <p className="text-2xl font-semibold">Lista de compras</p>
          <button className="w-40 h-11 bg-black text-white font-semibold rounded flex gap-1 justify-center items-center">
            <Plus />
            Criar lista
          </button>
        </div>
      </div>
    </section>
  )
}