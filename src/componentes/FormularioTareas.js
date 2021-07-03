import React, { useState } from 'react';

//uuid
import {v4 as uuidv4} from 'uuid';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const FormularioTareas = ({tareas, setTareas}) => {
    const [nuevaTarea, setNuevaTarea] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();

        setTareas(
            [
                //Tomar las tareas anteriores
                ...tareas, 
                //Agregar nueva tarea
                {
                    id: uuidv4(),
                    texto: nuevaTarea,
                    completada: false
                }
            ]
        );

        setNuevaTarea("");
    }

    return (
        <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="formulario-tarea__input" 
                placeholder="Escribe una tarea"
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
            />
            <button type="submit" className="formulario-tarea__boton">
                <FontAwesomeIcon icon={faPlusSquare} className="formulario-tarea__icono-btn"/>
            </button>
        </form>
    );
}
 
export default FormularioTareas;