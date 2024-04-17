import './FieldText.css';

function FieldText(props) {

    const placeholderModified = `${props.placeholder}...`;

    const aoDigitado = (e) => {
       props.aoAlterado(e.target.value)
    };

    return (
        <div className="campo-text">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModified} />
        </div>
    )
};

export default FieldText;