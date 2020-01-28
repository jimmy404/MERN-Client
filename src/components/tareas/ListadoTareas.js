import React, { Fragment} from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyecto = [
        { id: 1, nombre: 'Elegir Plataforma', estado: true},
        { id: 2, nombre: 'Elegir Codigo', estado: false},
        { id: 3, nombre: 'Elegir Hosting', estado: false},
        { id: 4, nombre: 'Elegir Forma de Pago', estado: true},
    ]


    return (
        <Fragment>
        <h2>Proyecto: Tienda Virtual</h2>
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
            >Eliminar Proyecto &times;</button>
        </ul>
        </Fragment>
    );
}

export default ListadoTareas;