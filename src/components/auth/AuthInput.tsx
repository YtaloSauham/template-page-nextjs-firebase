


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
        <div className="flex flex-col">
            <label>{props.label}</label>
                <input type={props.type ?? 'text'} value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
                required={props.obrigatorio}
                />
            
        </div>
    )
}