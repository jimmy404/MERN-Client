import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import
        {TAREAS_PROYECTO}
    from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { id: 2, nombre: 'Elegir Codigo', estado: false, proyectoId: 2},
            { id: 3, nombre: 'Elegir Hosting', estado: false, proyectoId: 3},
            { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { id: 2, nombre: 'Elegir Codigo', estado: false, proyectoId: 2},
            { id: 3, nombre: 'Elegir Hosting', estado: false, proyectoId: 3},
            { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { id: 2, nombre: 'Elegir Codigo', estado: false, proyectoId: 2},
            { id: 3, nombre: 'Elegir Hosting', estado: false, proyectoId: 3},
            { id: 4, nombre: 'Elegir Forma de Pago', estado: true, proyectoId: 4}
        ],
        tareasproyecto: null
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    //crear funciones

    //obtener las tareas de un proyecto especifico
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId,
            obtenerTareas
        })
    }

    return(
        <TareaContext.Provider
        value={{
            tareas: state.tareas,
            tareasproyecto: state.tareasproyecto,
            obtenerTareas
        }}>
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;