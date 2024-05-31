import './FieldText.css';

interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const FieldText = ({aoAlterado, label, placeholder, valor, obrigatorio = false, tipo = 'text'}: CampoTextoProps) => {

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
                type={tipo}
            />
        </div>
    )
};

export default FieldText;