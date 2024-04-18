import './Time.css';

function Time(props) {

    const css = { backgroundColor: props.corSecundaria };

    return(
        <section className="time-sec" style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        </section>
    )
}

export default Time;