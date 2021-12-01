import useAppData from "../../data/hook/useAppData"

interface BotaoAuthProps{
    nomeBotao?:any
    className?: string
    modo?:string
    icone?: any
    onClick? : (evento : any) => void
}


export default function BotaoAuth(props:BotaoAuthProps){
    return (
    <div>   
        <button onClick={props.onClick} className={props.className ? props.className : `
        w-full 
        bg-indigo-500 
        hover:bg-indigo-400
        text-white 
        rounded-lg 
        px-4 py-3 mt-6`}>
            {props.icone}
            {props.modo ? props.modo : props.nomeBotao}
        </button>

    </div>)
}