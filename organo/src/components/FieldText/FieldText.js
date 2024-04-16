import './FieldText.css';

function FieldText(props) {
    return (
        <div className="campo-text">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )
};

export default FieldText;