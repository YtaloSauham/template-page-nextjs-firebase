import { createContext, useEffect, useState } from "react";



type Modo= 'Login' | 'Cadastro' 


interface AppContextProps{
    modo?: Modo
    tema?: string
    alternarTema?: () => void
    submeter?: () => void

}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props) {
    const [theme,setTheme]=useState('');
    const [modo,setModo]= useState<Modo>('Login')


    useEffect(() =>{
        const themeLocal = localStorage.getItem('tema')
        setTheme(themeLocal)
    },[])
    function submeter(){
      setModo(modo === 'Login' ? 'Cadastro' : 'Login')
    }
    
    function alternarTema(){
        const novoTema= theme=== 'dark' ? '' : 'dark'
        setTheme(novoTema)
        localStorage.setItem('tema',novoTema)
        
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