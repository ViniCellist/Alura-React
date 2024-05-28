import './FieldText.css';

interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio: boolean
}

const FieldText = ({aoAlterado, label, obrigatorio, placeholder, valor}: CampoTextoProps) => {

    const placeholderModified = `${placeholder}...`;

    const aoDigitado = (event: React.ChangeEvent<HTMLInputElement>) => {
       aoAlterado(event.target.value)
    };

    return (
        <div className="campo-text">
            <label>{label}</label>
            <input 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModified} 
            />
        </div>
    )
};

export default FieldText;