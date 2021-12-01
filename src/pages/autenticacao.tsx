import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Autenticacao(){
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    return (
    <div>
        <h1>Autenticacao</h1>s
        <AuthInput 
        label="Email"
        type='text'
        valor={email}
        valorMudou={setEmail}/>

        <AuthInput 
        label="Senha"
        type='password'
        valor={password}
        valorMudou={setPassword}/>
    </div>
    )
}