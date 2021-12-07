import { createContext, useState } from "react";
import firebase  from "../../firebase/config";
import Usuario from "../../model/Usuario";
import route from 'next/router';


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

const AuthContext = createContext<AutContextProps>({})

export function AuthProvider(props) {
    const [usuario, setUsuario]= useState<Usuario>(null)

   async function loginGoogle() {
       const resp = await firebase.auth().signInWithPopup(
           new firebase.auth.GoogleAuthProvider()
       )
    
       if(resp.user?.email){
        const usuario =await usuarioNormalizado(resp.user)
        // firebase.auth().currentUser.sendEmailVerification()
        setUsuario(usuario)
       route.push('/')
       
       }
      
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