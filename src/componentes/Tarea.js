import React from 'react';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare,faEdit,faTimes } from '@fortawesome/free-solid-svg-icons';

const Tarea = ({tarea}) => {
    return (
        <li className="lista-tareas__tarea">
            <FontAwesomeIcon 
                icon={tarea.completada === true ? faCheckSquare: faSquare} 
                className="lista-tareas__icono lista-tareas__icono-check"
            />
            <div className="lista-tareas__texto">
                {tarea.texto}
            </div>
            <div className="lista-tareas__contenedor-botones">
                <FontAwesomeIcon 
                    icon={faEdit} 
                    className="lista-tareas__icono lista-tareas__icono-accion"
                />
                <FontAwesomeIcon 
                icon={faTimes} 
                className="lista-tareas__icono lista-tareas__icono-accion"
            />
            </div>
        </li>
    );
}
 
export default Tarea;