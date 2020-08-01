import React, { useReducer } from "react";
import { v4 } from "uuid";
import TasksReducer from "./TasksReducer";
import TasksContext from "./TasksContext";
import {
  AGREGAR_TAREA,
  OBTENER_TAREAS,
  ELIMINAR_TAREAS,
  VALIDAR_TAREA,
  ESTADO_TAREA,
  EDITAR_TAREA,
  ACTUAL_TAREA,
  LIMPIAR_TAREA,
} from "../../types";

const TasksState = (props) => {
  const initialState = {
    tareas: [],
    tareasproyecto: [],
    errortarea: false,
    tareaactual: null,
  };
  const [state, dispatch] = useReducer(TasksReducer, initialState);

  const agregarTarea = (tarea) => {
    tarea.id = v4();
    dispatch({ type: AGREGAR_TAREA, payload: tarea });
  };
  const validarTarea = () => {
    dispatch({ type: VALIDAR_TAREA });
  };
  const obtenerTareas = (idProyecto) => {
    dispatch({ type: OBTENER_TAREAS, payload: idProyecto });
  };
  const eliminarTarea = (idTarea) => {
    dispatch({ type: ELIMINAR_TAREAS, payload: idTarea });
  };
  const cambiarEstadoTarea = (tarea) => {
    dispatch({ type: ESTADO_TAREA, payload: tarea });
  };
  const tareaActual = (tarea) => {
    dispatch({ type: ACTUAL_TAREA, payload: tarea });
  };
  const editarTarea = (tarea) => {
    dispatch({ type: EDITAR_TAREA, payload: tarea });
  };
  const limpiarTarea = () => {
    dispatch({ type: LIMPIAR_TAREA });
  };

  return (
    <TasksContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaactual: state.tareaactual,
        agregarTarea,
        validarTarea,
        obtenerTareas,
        eliminarTarea,
        cambiarEstadoTarea,
        tareaActual,
        editarTarea,
        limpiarTarea,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksState;
