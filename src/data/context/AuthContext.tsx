import { createContext, useState } from "react";
import firebase  from "../../firebase/config";
import Usuario from "../../model/Usuario";
import route from 'next/router';
import Cookies from 'js-cookie';

interface AutContextProps {
    usuario?: Usuario
    loginGoogle?: () => Promise<void>
}

async function usuarioNormalizado(usuarioFirebase: firebase.User):Promise<Usuario>{
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL
    }
        
}

function gerenciarCookie(logado: boolean) {
    if(logado) {
        Cookies.set('auth-user', logado, {
            expires: 7
        })
    } else {
        Cookies.remove('auth-user')
    }
}

const AuthContext = createContext<AutContextProps>({})

export function AuthProvider(props) {
    const [loading,setLoading] = useState(true)
    const [usuario, setUsuario]= useState<Usuario>(null)



    async function configurarSessao(usuarioFirebase) {
        if(usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setLoading(false)
            return usuario.email

        } else {
            gerenciarCookie(false)
            setUsuario(null)
            setLoading(false)
            return false
        }
    }
   async function loginGoogle() {
       const resp = await firebase.auth().signInWithPopup(
           new firebase.auth.GoogleAuthProvider()
       )
    
      configurarSessao(resp.user)
       route.push('/')
       
       }
      
   


    return (
        <AuthContext.Provider value={{
            usuario,
            loginGoogle

        }}>
            {props.children}
            </AuthContext.Provider>
    )
}
export default AuthContext