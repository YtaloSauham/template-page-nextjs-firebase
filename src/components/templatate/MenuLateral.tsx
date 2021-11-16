import { iconeAjustes, iconeCasa, iconeLogaut, iconeNovidade } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";




export default function MenuLateral(){
    return(
        <aside className={` flex flex-col`}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500  to-purple-800
                h-20 w-20
            `}><Logo/></div>
           <ul className={`flex-grow`}>
            <MenuItem url="/" texto="Inicio" icone={iconeCasa}/>
            <MenuItem url="/ajustes" texto="Ajustes" icone={iconeAjustes}/>
            <MenuItem url="/notificacoes" texto="Notificacao" icone={iconeNovidade}/>
           </ul>
           <ul>

           <MenuItem texto="Sair" icone={iconeLogaut}
           onClick={() => console.log('logaut')} 
           className={`
           text-red-600
           hover:bg-red-400 hover:text-white `}  />
           </ul>
        </aside>
    )
}