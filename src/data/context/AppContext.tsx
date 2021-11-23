import { createContext, useState } from "react";


type Tema = 'dark' | ''


interface AppContextProps{
    tema?: Tema
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props) {
    const [theme,setTheme]=useState<Tema>('');
    
    function alternarTema(){
        setTheme(theme=== 'dark' ? '' : 'dark')

        console.log(theme)
    }
    return (
        <AppContext.Provider value={{
            tema: theme,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
// export const AppConsumer = AppContext.Consumer