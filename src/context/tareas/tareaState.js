import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
        TAREAS_PROYECTO,
        AGREGAR_TAREA,
        VALIDAR_TAREA,
        ELIMINAR_TAREA
    } from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { id: 2, nombre: 'Elegir Codigo', estado: false, proyectoId: 2},
            { id: 3, nombre: 'Elegir Hosting', estado: false, proyectoId: 3},
            { id: 4, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { id: 5, nombre: 'Elegir Codigo', estado: false, proyectoId: 2},
            { id: 6, nombre: 'Elegir Hosting', estado: false, proyectoId: 3},
            { id: 7, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { id: 8, nombre: 'Elegir Codigo', estado: false, proyectoId: 2},
            { id: 9, nombre: 'Elegir Hosting', estado: false, proyectoId: 3},
            { id: 10, nombre: 'Elegir Forma de Pago', estado: true, proyectoId: 4}
        ],
        tareasproyecto: null,
        errortarea: false
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

    //Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //valida y muestra error de ser necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA,
        })
    }

    //Eliminar tarea por id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }
    return(
        <TareaContext.Provider
        value={{
            tareas: state.tareas,
            tareasproyecto: state.tareasproyecto,
            errortarea: state.errortarea,
            obtenerTareas,
            agregarTarea,
            validarTarea,
            eliminarTarea
        }}>
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;