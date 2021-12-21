import Image from 'next/image'
import router from 'next/router';
import Load from '../../../public/img/loading.gif'
import useAuth from '../../data/hook/useAuth'


export default function ForcarAutenticacao(props){

    const {usuario,loading} = useAuth();
    
    function renderizarConteudo(){
        return(
            <>
            {props.children}
            </>
        )
    }

    function renderizarLoading() {
        return (
            <div className={
                `flex justify-center items-center h-screen`
            }>
                <Image src={Load} />

            </div>
        )
    }

    if(!loading && usuario?.email){
        return renderizarConteudo()
    } else if (loading) {
        return renderizarLoading()
    } else {
        router.push('/autenticacao')
        return null 
        
    }
    
}