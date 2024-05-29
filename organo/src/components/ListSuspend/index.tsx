import './ListSuspend.css';

interface ListaSuspensaProps {
    aoAlterado: (valor: string) => void
    label: string
    required: boolean
    valor: string
    itens: string[]

}

function ListSuspend(props: ListaSuspensaProps) {
    return (
        <div className="list-suspended">
            <label>{props.label}</label>
            <select onChange={e => props.aoAlterado(e.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListSuspend;