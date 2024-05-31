import { useState } from 'react';
import Button from '../Button/index';
import ListSuspend from '../ListSuspend/index';
import FieldText from '../FieldText/index';
import './Form.css';
import { IColaborador } from '../../shared/interfaces/IColaborador.js';

interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
    times: string[]
}

function Form(props: FormularioProps) {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [data, setData] = useState('');

    const aoSalvar = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            data
        })
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
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

                <FieldText 
                    label="Data de entrada no time"
                    placeholder=""
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                    tipo="date"
                />

                <ListSuspend
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;