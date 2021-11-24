import { isPropertySignature } from "typescript";
import { iconeLua, iconeSol } from "../icons";

interface BotaoAlternarTemaProps{
    tema: string
    alternarTema: () => void
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps){
    return props.tema === 'dark' ? ( 
        <div onClick={props.alternarTema} className={`
        hidden sm:flex items-center cursor-pointer
        bg-gradient-to-r from-yellow-200 to to-yellow-800
        w-14 lg:w-24 h-8 p-1 rounded-full
        
        `}>
            <div className={`
                flex items-center justify-center
                bg-transparent text-yellow-600 w-6 rounded-full
            `}>
                {iconeSol(5)}
            </div>
            <div className={`
            hidden lg:flex items-center ml-4 
            text-white
            
            `}>
                <span>Claro</span>
            </div>
        </div>

    ):(
        <div onClick={props.alternarTema} className={`
        hidden sm:flex items-center justify-end cursor-pointer
        bg-gradient-to-r from-gray-500 to to-gray-900
        w-14 lg:w-24 h-8 p-1 rounded-full
        
        `}>
             <div className={`
            hidden lg:flex items-center mr-3 ml-1
            text-white
            
            `}>
                <span>Escuro</span>
            </div>
            <div className={`
                flex items-center justify-center
                bg-transparent text-white w-6 rounded-full
            `}>
                {iconeLua(5)}
            </div>
           
        </div>
    )
}