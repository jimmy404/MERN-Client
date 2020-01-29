import React, { Fragment, useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {

    //Obtener state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        { id: 1, nombre: 'Elegir Plataforma', estado: true},
        { id: 2, nombre: 'Elegir Codigo', estado: false},
        { id: 3, nombre: 'Elegir Hosting', estado: false},
        { id: 4, nombre: 'Elegir Forma de Pago', estado: true},
    ]

    //Eliminar un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return (
        <Fragment>
        <h2>Proyecto: {proyectoActual.nombre}</h2>
        <ul className="listado-tareas">
            {tareasProyecto.length === 0
                ? (<li className="tarea"><p>No hay tareas</p></li>)
                : tareasProyecto.map(tarea => (
                    <Tarea
                        tarea={tarea}
                        />
                ))
            }
            <button
                type="button"
                className="btn btn-primario"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </ul>
        </Fragment>
    );
}

export default ListadoTareas;