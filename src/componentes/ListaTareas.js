import React from 'react';

//Componentes
import Tarea from './Tarea';

const ListaTareas = ({tareas}) => {
    return (
        <ul className="lista-tareas">
            {
                tareas.length > 0 
                ? 
                    tareas.map((tarea) => <Tarea tarea={tarea} key={tarea.id}/>) 
                :
                    <div className="lista-tareas__mensaje">No hay tareas agregadas</div>
            }
        </ul>
    );
}
 
export default ListaTareas;