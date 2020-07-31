import React, { useReducer } from "react";
import { v4 } from "uuid";
import ProjectContext from "./ProjectContext";
import ProjectReducer from "./ProjectReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types";

const ProjectState = (props) => {
  const proyectos = [
    { id: 1, name: "Intranet" },
    { id: 2, name: "Tienda Online" },
    { id: 3, name: "App movil" },
  ];
  const initialState = {
    formulario: false,
    proyectos: [],
    errorformulario: false,
    proyecto: null,
  };

  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  // Funciones
  const mostrarFormulario = () => {
    dispatch({ type: FORMULARIO_PROYECTO });
  };

  const obtenerProyectos = () => {
    dispatch({ type: OBTENER_PROYECTOS, payload: proyectos });
  };

  const agregarProyecto = (proyecto) => {
    proyecto.id = v4();

    dispatch({ type: AGREGAR_PROYECTO, payload: proyecto });
  };

  const mostrarError = () => {
    dispatch({ type: VALIDAR_FORMULARIO });
  };

  const actualProyecto = (idProyecto) => {
    dispatch({ type: PROYECTO_ACTUAL, payload: idProyecto });
  };
  const eliminarProyecto = (idProyecto) => {
    dispatch({ type: ELIMINAR_PROYECTO, payload: idProyecto });
  };

  return (
    <ProjectContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        actualProyecto,
        eliminarProyecto,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};
export default ProjectState;
