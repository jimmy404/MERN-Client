import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import uuid from 'uuid';

import {
        TAREAS_PROYECTO,
        AGREGAR_TAREA,
        VALIDAR_TAREA,
        ELIMINAR_TAREA,
        ESTADO_TAREA,
        TAREA_ACTUAL,
        ACTUALIZAR_TAREA,
        LIMPIAR_TAREA
    } from '../../types';

const TareaState = props => {
    const initialState = {
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
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

    //cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //extraer tarea para edicion -tarea actual
    const guardarTareaActual = tarea => {
        dispatch ({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }
    //edita o modifica una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    //elimina tarea seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }

    return(
        <TareaContext.Provider
        value={{
            tareasproyecto: state.tareasproyecto,
            errortarea: state.errortarea,
            tareaseleccionada: state.tareaseleccionada,
            obtenerTareas,
            agregarTarea,
            validarTarea,
            eliminarTarea,
            cambiarEstadoTarea,
            guardarTareaActual,
            actualizarTarea,
            limpiarTarea
        }}>
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;