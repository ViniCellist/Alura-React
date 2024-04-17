import './ListSuspend.css';

function ListSuspend(props) {
    return (
        <div className="list-suspended">
            <label>{props.label}</label>
            <select onChange={e => props.aoAlteado(e.target.value)} required={props.required} value={props.value}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListSuspend;