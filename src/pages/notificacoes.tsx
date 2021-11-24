import Layout from "../components/templatate/Layout";
// import { AppConsumer } from "../data/context/AppContext";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {

  const {alternarTema,tema}= useAppData()
  return (
    <Layout titulo="Notificacoes" subtitulo="Aqui vao as notificacoes">
      <h3>CONTEUDO</h3> 
      {/* <AppConsumer>
        {dados=><h3>{dados.nome}</h3>}
      </AppConsumer> */}

      
      <button onClick={alternarTema}>Click</button> 

    </Layout>
  )
}
