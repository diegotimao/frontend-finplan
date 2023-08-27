'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import BannerImage from '../../../public/bannerImage.jpg';

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
    <div className="w-screen h-screen bg-white">
      <div className="flex flex-2 gap-3 m-auto">
        <div className="h-screen w-6/12 p-5">
          <Image src={BannerImage} alt="Banner Image" className='h-full w-full rounded-lg' />
        </div>
        <div className="grid content-center h-screen w-6/12 p-20">
          <div className='p-10 max-w-xl'>
            <h1 className="text-4xl/[2] font-extrabold font-sans text-black">Cadastro</h1>
            <strong className="text-xl font-light mb-4 text-black">Preencha com seus dados e tenha uma experiência personalizada :)</strong>

            <form className="grid grid-cols-1 gap-3 mt-5" onSubmit={submitForm} method="POST">
              <fieldset className="border border-solid border-gray-600 h-16 w-full rounded-md">
                <legend className='ml-3 pl-1 pr-1 text-md font-semibold text-zinc-600'>Nome</legend>
                <input type="text" name="nome" id="nome" placeholder="Nome de usuário" className="w-full pl-4 rounded-sm outline-none placeholder-zinc-600/70" />
              </fieldset>
              <fieldset className="border border-solid border-gray-600 h-16 w-full rounded-md">
                <legend className='ml-3 pl-1 pr-1 text-md font-semibold text-zinc-600'>Email</legend>
                <input type="text" name="email" id="email" placeholder="useremail@gmail.com" className="w-full pl-4 rounded-sm outline-none placeholder-zinc-600/70" />
              </fieldset>
              <fieldset className="border border-solid border-gray-600 w-full h-16 rounded-md">
                <legend className='ml-3 pl-1 pr-1 text-md font-semibold text-zinc-600'>Senha</legend>
                <input type="password" name="senha" id="senha" placeholder="Senha (mínimo de 6 caracteres)" className="w-full pl-4 outline-none placeholder-zinc-600/70" />
              </fieldset>
              <button type="submit" className="w-full mt-4 h-14 bg-blue-400 hover:bg-blue-600/80 border rounded-md text-white font-semibold">Cadastrar-se</button>
            </form>

            <p className='text-gray-900 mt-6'>Já tem cadastro? Vá para Login</p>
          </div>
        </div>
      </div>
    </div>
  )
}