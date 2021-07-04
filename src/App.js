import React, { useState } from 'react';
import './App.css';

//componentes
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';

const App = () => {
  const [tareas, setTareas] = useState([
    {
      id:1,
      texto: 'Lavar la ropa',
      completada: false
    }
  ]);

  return (
    <div className="contenedor">
      <Header/>
      <FormularioTareas tareas={tareas} setTareas={setTareas}/>
      <ListaTareas tareas={tareas}/>
    </div>
  );
}

export default App;
