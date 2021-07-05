import React from 'react';

//Componentes
import Tarea from './Tarea';

const ListaTareas = ({tareas, setTareas, mostrarCompletadas}) => {
    
    const toggleCompletada = (id) => {
        setTareas(tareas.map((tarea) => {
            if(tarea.id === id) {
                return {...tarea, completada: !tarea.completada}
            }
            return tarea;
        }));
    }

    const editTarea = (id, texto) => {
        setTareas(tareas.map((tarea) => {
            if(tarea.id === id) {
                return {...tarea, texto: texto}
            }
            return tarea;
        }));
    }

    const deleteTarea = (id) => {
        setTareas(tareas.filter((tarea) => {
            if(tarea.id !== id) {
                return tarea;
            }
            return;
        }));
    }

    return (
        <ul className="lista-tareas">
            { tareas.length > 0 ? tareas.map((tarea) => {
                if(mostrarCompletadas) {
                    return  <Tarea 
                                tarea={tarea} 
                                key={tarea.id} 
                                toggleCompletada={toggleCompletada} 
                                editTarea={editTarea}
                                deleteTarea={deleteTarea}
                            />
                } 
                else if(!tarea.completada) {
                    return  <Tarea 
                                tarea={tarea} 
                                key={tarea.id} 
                                toggleCompletada={toggleCompletada} 
                                editTarea={editTarea}
                                deleteTarea={deleteTarea}
                            />;
                }
                return
            }) 
            :<div className="lista-tareas__mensaje">No hay tareas agregadas</div>
            }
        </ul>
    );
}
 
export default ListaTareas;