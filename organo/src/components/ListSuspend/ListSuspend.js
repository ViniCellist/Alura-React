import './ListSuspend.css';

function ListSuspend(props) {
    return (
        <div className="list-suspended">
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListSuspend;