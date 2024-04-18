import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Time from './components/Time/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form aoColaboradorCadastro={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <Time nome="Programação"/>
      <Time nome="Front-End"/>
      <Time nome="Data Science"/>
    </div>
  );
}

export default App;
