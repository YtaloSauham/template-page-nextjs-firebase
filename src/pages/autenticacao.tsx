import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { iconeAvisoErro, iconeGoogle } from "../components/icons";
import BotaoAuth from "../components/templatate/BotaoAuth";
import useAppData from "../data/hook/useAppData";
import useAuth from "../data/hook/useAuth";

export default function Autenticacao(){

    const { cadastro,login,usuario, loginGoogle}= useAuth()
    const [erro,setErro] = useState('')
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {modo,mudarModo}=useAppData()




    async function submeter(){
        try{
            if(modo === 'Login' ){
                await login(email,password)
            } else{
              
                await cadastro(email,password)
            }
            

        } catch(e){
            msgErro(e?.message ?? 'Erro inesperado')
        }
      
      }
      
    

    function msgErro(msg:string,tempo = 5){
        setErro(msg)
        setTimeout(()=> setErro(null), tempo * 1000)
    }

   
    return (
        <div className="flex h-screen items-center justify-center ">
            <div className="hidden md:block md:w-1/2 lg:w-2/3
 ">
                <img
                    src="https://source.unsplash.com/random"
                    alt="Imagem da Tela de autenticação"
                    className=" h-screen w-full object-cover"
                />
            </div>
             
             <div className="m-10 w-full md:w-1/2  lg:w-1/3
    ">
        <h1 className={`
        text-2xl font-bold mb-5
        `}>
            {modo === 'Login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
        </h1>
        {erro ? (
            <div className={`
            flex items-center
            bg-red-400 text-white
            py-3 px-5 
            my-2
            border border-red-700 rounded-lg
            `}>
                {iconeAvisoErro()}
                <span className={`
                ml-3`}>{erro}</span>
                </div>

        ) : false }
        

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

        <BotaoAuth onClick={submeter} 
        className={`
        w-full 
        bg-indigo-500 
        hover:bg-indigo-400
        text-white 
        rounded-lg 
        px-4 py-3 mt-6`} 
        modo={modo}
        />


        <BotaoAuth onClick={loginGoogle} 
        className={`
        w-full bg-red-500 
        hover:bg-red-400
        text-white 
        rounded-lg 
        px-4 py-3
        mt-6
        flex justify-center`}
        icone={iconeGoogle(6)}
        nomeBotao="Entrar com o Google"
        />
{/* 
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

        </button> */}
            {modo === 'Login' ? (

                <p className={`mt-8`}>
                    Novo por aqui?
                     <a onClick={() =>mudarModo()}
                     className={`
                        text-blue-500 font-semibold
                        hover:text-blue-700
                        cursor-pointer

                        
                     `}> Crie uma conta</a>

                </p>
               
            ):
           ( <p className={`mt-8`}>
               Já tem uma conta? 
                   <a onClick={() => mudarModo()}
            className={`
            text-blue-500 font-semibold
                        hover:text-blue-700
                        cursor-pointer`}> Faça o login aqui.
                </a>

            </p>
        
           )}
        </div>
   
    </div>
    )
}