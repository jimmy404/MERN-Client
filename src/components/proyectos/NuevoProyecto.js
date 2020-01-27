import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

    //State para proyecto
    const [proyecto, guardarProyecto] = useState({});



    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>

            <form
                className="formulario-nuevo-proyecto"
            >
            <input
                type="text"
                className="input-text"
                placeholder="Nombre Proyecto"
                name="nombre"
            />

            <input
                type="text"
                className="btn btn-block btn-primario"
                value="Agregar Proyecto"
            />

            </form>
        </Fragment>
    );
}

export default NuevoProyecto;