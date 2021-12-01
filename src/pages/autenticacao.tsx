import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

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

        <button onClick={submeter}>
        {modo === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>
    </div>
    )
}