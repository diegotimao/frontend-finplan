'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import BannerImage from '../../../public/banner-login.svg';

export default function Login() {
  const router = useRouter();

  const submitForm = async (event: any) => {
    event.preventDefault();

    const data = {
      nome: event.target.nome.value,
      email: event.target.email.value,
      password: event.target.senha.value
    }

    if (data.nome !== '') {
      return router.push('/dashboard')
    }
  }

  return (
    <div className="w-screen h-screen bg-zinc-900">
      <div className="container flex flex-2 gap-3 m-auto">
        <div className="h-screen w-6/12 p-12 grid grid-cols-1 items-center">
          <Image src={BannerImage} alt="Banner Image" className='h-4/5' />
        </div>
        <div className="grid content-center h-screen w-6/12 p-20">
          <div>
            <h1 className="text-4xl/[2] font-bold font-sans text-white">Cadastro</h1>
            <strong className="text-xl font-light mb-4 text-white">Preencha com seus dados e tenha uma experiência personalizada :)</strong>

            <form className="grid grid-cols-1 gap-3 mt-5" onSubmit={submitForm} method="POST">
              <label className="border-indigo-500/75" htmlFor="">
                <input type="text" name="nome" id="nome" placeholder="Nome" className="w-full h-14 border border-zinc-800 pl-3 bg-black text-white rounded-md outline-none" />
              </label>
              <label className="border-indigo-500/75" htmlFor="">
                <input type="text" name="email" id="email" placeholder="Email" className="w-full h-14 border border-zinc-800 pl-3 bg-black text-white rounded-md outline-none" />
              </label>
              <label className="border-indigo-500/75" htmlFor="">
                <input type="password" name="senha" id="senha" placeholder="Senha" className="w-full h-14 border border-zinc-800 pl-3 bg-black text-white rounded-md outline-none input[type='password']" />
              </label>
              <button type="submit" className="w-full mt-4 h-14 bg-blue-600 hover:bg-blue-600/80 border border-zinc-800 rounded-md text-white font-semibold">Cadastrar-se</button>
            </form>

            <p className='text-white mt-8'>Já tem cadastro? Vá para Login</p>
          </div>
        </div>
      </div>
    </div>
  )
}