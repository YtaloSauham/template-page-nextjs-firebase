import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { iconeGoogle } from "../components/icons";

export default function Autenticacao(){
    const [modo,setModo]= useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    function submeter(){
        if(modo === 'login'){
            console.log('login')
        } else{
            console.log('cadastrar')
        }
    }






    return (
    <div>
        <h1 className={`
        text-xl font-bold mb-5`}>
            {modo === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
        </h1>
        <AuthInput 
        label="Email"
        type='email'
        valor={email}
        valorMudou={setEmail}
        obrigatorio
     />

        <AuthInput 
        label="Senha"
        type='password'
        valor={password}
        valorMudou={setPassword}
        obrigatorio/>

        <button onClick={submeter} className={`
        w-full 
        bg-indigo-500 
        hover:bg-indigo-400
        text-white 
        rounded-lg 
        px-4 py-3 mt-6`}>

            {modo === 'login' ? 'Entrar' : 'Cadastrar'}

        </button>

        <hr className="my-6 border-gray-300 w-full"/>

        <button onClick={submeter} className={`
        w-full bg-red-500 
        hover:bg-red-400
        text-white 
        rounded-lg 
        px-4 py-3
        mt-6
        flex justify-center
        `}>

            {iconeGoogle(6)} Entrar com Google

        </button>
    </div>
    )
}