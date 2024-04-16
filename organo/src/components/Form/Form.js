import Button from '../Button/Button';
import FieldText from '../FieldText/FieldText';
import ListSuspend from '../ListSuspend/ListSuspend';
import './Form.css';


function Form() {

    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Desing',
        'Mobile',
        'Inovação e Gestão'
    ];

    const aoSalvar = (event) => {
        event.preventDefault();
    }

    return (
        <section className="form-container">
            <form onSubmit={aoSalvar} >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <FieldText label="Nome" placeholder="Digite seu nome" />
                <FieldText label="Cargo" placeholder="Digite seu cargo" />
                <FieldText label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListSuspend label="Time" itens={times}/>
                <Button texto="Criar Card" />
            </form>
        </section>
    )
}

export default Form;