import React, { useReducer } from 'react';

import uuid from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
        FORMULARIO_PROYECTO,
        OBTENER_PROYECTOS,
        AGREGAR_PROYECTO,
        VALIDAR_FORMULARIO
    } from '../../types';




    const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Shopping' }
    ]

    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //Funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //Obtener proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    //Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuid.v4();

        //insertar proyecto en state c/ dispatch
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    //validar form por error
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )


}

export default ProyectoState;