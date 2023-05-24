import { Plus, Wallet, Coins, BaggageClaim } from "lucide-react"

export default function Compras() {
  return (
    <section className="w-full h-52">
      <div className="mt-10 m-auto xl:w-10/12 2xl:w-6/12 w-10/12">
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 mt-4">
          <div className="h-28 rounded bg-blue-400/20 p-4">
            <div className="h-20 w-20 bg-blue-700/80 rounded flex items-center justify-center">
              <Wallet color="white"/>
            </div>
          </div>
          <div className="h-28 rounded bg-red-500/20 p-4">
            <div className="h-20 w-20 bg-red-500 rounded flex items-center justify-center">
              <Coins color="white"/>
            </div>
          </div>
          <div className="h-28 rounded bg-green-700/20 p-4">
            <div className="h-20 w-20 bg-green-400 rounded flex items-center justify-center">
              <BaggageClaim color="white"/>
            </div>
          </div>
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