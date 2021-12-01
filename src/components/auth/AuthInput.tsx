


interface AuthInputProps {
    label: string
    valor: any
    type?: 'text' | 'password'
    valorMudou: (novoValor: any) => void   
}


export default function AuthInput(props:AuthInputProps){
    return( 
        <div className="flex flex-col">
            <label>{props.label}</label>
                <input type={props.type} value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
                />
            
        </div>
    )
}