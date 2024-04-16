import './Button.css';

function Button(props) {
    return (
        <button className="botao">{props.texto}</button>
    )
};

export default Button;