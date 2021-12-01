


interface AuthInputProps {
    label: string
    valor: any
    obrigatorio?: boolean
    naoRender?: boolean
    type?: 'text' |'email' |'password'
    valorMudou: (novoValor: any) => void   
}


export default function AuthInput(props:AuthInputProps){
    return props.naoRender ? null : ( 
        <div className="flex flex-col
        mt-4">
            <label>{props.label}</label>
                <input type={props.type ?? 'text'} value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
                required={props.obrigatorio}
                className={`
                bg-gray-200
                px-4 py-3 mt-2
                rounded-lg
                border focus:border-blue-500 focus:outline-none focus:bg-white
                
                
                
                `}
                />
            
        </div>
    )
}