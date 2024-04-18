import { useState } from 'react';
import Button from '../Button/Button';
import FieldText from '../FieldText/FieldText';
import ListSuspend from '../ListSuspend/ListSuspend';
import './Form.css';


function Form(props) {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (event) => {
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="form-container">
            <form onSubmit={aoSalvar} >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <FieldText 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <FieldText 
                    obrigatorio={true}
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <FieldText 

                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} 
                />

                <ListSuspend
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Button texto="Criar Card" />
            </form>
        </section>
    )
}

export default Form;