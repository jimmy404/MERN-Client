import React, { useReducer } from 'react';

import uuid from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
        FORMULARIO_PROYECTO,
        OBTENER_PROYECTOS,
        AGREGAR_PROYECTOS
    } from '../../types';



const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Shopping' }
    ]

    const initialState = {
        proyectos: [],
        formulario: false
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
    }

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )


}

export default ProyectoState;