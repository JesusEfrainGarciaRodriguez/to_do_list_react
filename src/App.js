import React, { useState } from 'react';
import './App.css';

//componentes
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';

const App = () => {
  const [tareas, setTareas] = useState([
    {
      id:1,
      texto: 'Lavar la ropa',
      completada: true
    }
  ]);

  return (
    <div className="contenedor">
      <Header/>
      <FormularioTareas tareas={tareas} setTareas={setTareas}/>
    </div>
  );
}

export default App;
