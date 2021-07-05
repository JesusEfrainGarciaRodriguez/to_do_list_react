import React, { useState } from 'react';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare,faEdit,faTimes } from '@fortawesome/free-solid-svg-icons';

const Tarea = ({tarea, toggleCompletada, editTarea, deleteTarea}) => {
    const [changeTarea, setChangeTarea] = useState(false);
    const [nuevaTarea, setNuevaTarea] = useState(tarea.texto);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTarea(tarea.id, nuevaTarea);
        setChangeTarea(false);
    }

    return (
        <li className="lista-tareas__tarea">
            <FontAwesomeIcon 
                icon={tarea.completada ? faCheckSquare: faSquare} 
                className="lista-tareas__icono lista-tareas__icono-check"
                onClick={() => toggleCompletada(tarea.id)}
            />
            <div className="lista-tareas__texto">
                {
                    changeTarea
                    ?
                        <form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                className="formulario-editar-tarea__input"
                                value={nuevaTarea}
                                onChange={(e) => setNuevaTarea(e.target.value)}
                            />
                            <button type="submit" className="formulario-editar-tarea__boton">Actualizar</button>
                        </form>
                    :
                    tarea.texto
                }
            </div>
            <div className="lista-tareas__contenedor-botones">
                <FontAwesomeIcon 
                    icon={faEdit} 
                    className="lista-tareas__icono lista-tareas__icono-accion"
                    onClick={() => setChangeTarea(!changeTarea)}
                />
                <FontAwesomeIcon 
                icon={faTimes} 
                className="lista-tareas__icono lista-tareas__icono-accion"
                onClick={() => deleteTarea(tarea.id)}
            />
            </div>
        </li>
    );
}
 
export default Tarea;