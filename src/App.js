import React, { useEffect, useState } from 'react';
import './App.css';

//componentes
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';

const App = () => {
  // Obtenemos las tareas guardadas de localstorage
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')): [];

  // Establecemos el estado de las tareas
  const [tareas, setTareas] = useState(tareasGuardadas);
  
  // Guardamos los datos de tareas en el localstorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  },[tareas]);

  // Obtenemos el estado de mostrarCompletadas del localstorage
  let configMostrarCompletadas = 
    localStorage.getItem('mostrarCompletadas') ? 
      // Convertir string a boolean
      localStorage.getItem('mostrarCompletadas') === 'true' 
      : 
      true;

  // Establecemos el estado a mostrarCompletadas
  const [mostrarCompletadas, setMostrarCompletadas] = useState(configMostrarCompletadas);

  // Guardamos el dato de mostrarCompletadas en el localstorage
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  },[mostrarCompletadas]);

  return (
    <div className="contenedor">
      <Header mostrarCompletadas={mostrarCompletadas} setMostrarCompletadas={setMostrarCompletadas}/>
      <FormularioTareas tareas={tareas} setTareas={setTareas}/>
      <ListaTareas tareas={tareas} setTareas={setTareas} mostrarCompletadas={mostrarCompletadas}/>
    </div>
  );
}

export default App;
