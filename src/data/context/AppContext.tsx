import { createContext, useState } from "react";


type Tema = 'dark' | ''
type Modo= 'Login' | 'Cadastro' 


interface AppContextProps{
    modo?: Modo
    tema?: Tema
    alternarTema?: () => void
    submeter?: () => void

}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props) {
    const [theme,setTheme]=useState<Tema>('');
    const [modo,setModo]= useState<Modo>('Login')

    function submeter(){
        if(modo === 'Login'){
            console.log('login')
        } else{
            console.log('cadastrar')
        }
    }
    
    function alternarTema(){
        setTheme(theme=== 'dark' ? '' : 'dark')
        console.log(theme)
    }
    return (
        <AppContext.Provider value={{
            tema: theme,
            modo:modo,
            alternarTema,
            submeter
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
// export const AppConsumer = AppContext.Consumer