import { iconeAjustes, iconeCasa, iconeNovidade } from "../icons";
import MenuItem from "./MenuItem";




export default function MenuLateral(){
    return(
        <aside>
           <ul>
    
            <MenuItem url="/" texto="Inicio" icone={iconeCasa}/>
            <MenuItem url="/ajustes" texto="Ajustes" icone={iconeAjustes}/>
            <MenuItem url="/notificacoes" texto="Notificacao" icone={iconeNovidade}/>
           
           </ul>
        </aside>
    )
}