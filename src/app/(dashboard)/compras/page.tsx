import { Card, Metric, Flex, ProgressBar, Text } from "@tremor/react"
import { Plus } from "lucide-react"

export default function Compras() {
  return (
    <section className="w-full h-52">
      <div className="mt-8 m-auto xl:w-10/12 2xl:w-6/12 w-10/12">
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 mt-4">
          <Card className="max-w-xl mx-auto">
            <Text>Gasto total</Text>
            <Metric>$ 706.00</Metric>
            <Flex className="mt-4">
              <Text>32% of annual target</Text>
              <Text>$ 225,000</Text>
            </Flex>
            <ProgressBar percentageValue={32} className="mt-2" />
          </Card>

          <Card className="max-w-xl mx-auto">
            <Text>Gasto ttal</Text>
            <Metric>$ 71,465</Metric>
            <Flex className="mt-4">
              <Text>32% comparado ao mês passado</Text>
              <Text>$ 225,000</Text>
            </Flex>
            <ProgressBar percentageValue={72} className="mt-2" />
          </Card>

          <Card className="max-w-xl mx-auto">
            <Text>Valor da última compra</Text>
            <Metric>$ 71,465</Metric>
            <Flex className="mt-4">
              <Text>32% of annual target</Text>
              <Text>$ 225,000</Text>
            </Flex>
            <ProgressBar percentageValue={72} className="mt-2" />
          </Card>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <p className="text-2xl font-semibold">Lista de compras</p>
          <button className="w-40 h-11 bg-black text-white font-semibold rounded flex gap-1 justify-center items-center">
            <Plus />
            Criar lista
          </button>
        </div>

        <div className="w-full mt-8">
          <ul className="grid grid-cols-1 gap-1 text-zinc-600">
            <li className="grid grid-cols-4 bg-white p-3 rounded  border border-zinc-200/80 cursor-pointer hover:bg-slate-300/30">
              <span className='font-semibold'>Compras do mês</span>
              <span className="flex justify-end text-green-600 font-bold">46 Items</span>
              <span className="flex justify-end">24/05</span>
              <span className="flex justify-end">2 pessoas</span>
            </li>

            <li className="grid grid-cols-4 bg-white p-3 rounded  border border-zinc-200/80 cursor-pointer hover:bg-slate-300/30">
              <span className='font-semibold'>Compras da semana</span>
              <span className="flex justify-end text-green-600 font-bold">16 Items</span>
              <span className="flex justify-end">24/05</span>
              <span className="flex justify-end">2 pessoas</span>
            </li>

            <li className="grid grid-cols-4 bg-white p-3 rounded  border border-zinc-200/80 cursor-pointer hover:bg-slate-300/30">
              <span className='font-semibold'>Compras do mês</span>
              <span className="flex justify-end text-green-600 font-bold">46 Items</span>
              <span className="flex justify-end">24/05</span>
              <span className="flex justify-end">2 pessoas</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}