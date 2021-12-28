import { createContext, useEffect, useState } from "react";



type Modo= 'Login' | 'Cadastro' 


interface AppContextProps{
    modo?: Modo
    mudarModo?:() => void
    tema?: string
    alternarTema?: () => void
   

}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props) {
    const [theme,setTheme]=useState('');
    const [modo,setModo]= useState<Modo>('Login')


   function mudarModo(){
        
            if(modo === 'Login'){
                setModo('Cadastro')
            } else{
                setModo('Login')
            }
              
            }

    useEffect(() =>{
        const themeLocal = localStorage.getItem('tema')
        setTheme(themeLocal)
    },[])
   
    function alternarTema(){
        const novoTema= theme=== 'dark' ? '' : 'dark'
        setTheme(novoTema)
        localStorage.setItem('tema',novoTema)
        
    }
    return ( 
        <AppContext.Provider value={{
            tema: theme,
            modo:modo,
            mudarModo,
            alternarTema,
            
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
// export const AppConsumer = AppContext.Consumer