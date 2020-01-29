import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

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
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    return(
        <TareaContext.Provider
        value={{
            tareas: state.tareas
        }}>
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;