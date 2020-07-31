import React, { useReducer } from "react";
import { v4 } from "uuid";
import TasksReducer from "./TasksReducer";
import TasksContext from "./TasksContext";
import { AGREGAR_TAREA, OBTENER_TAREAS, ELIMINAR_TAREAS } from "../../types";

const TasksState = (props) => {
  const initialState = {
    tareas: [],
    tareasproyecto: [],
  };
  const [state, dispatch] = useReducer(TasksReducer, initialState);

  const agregarTarea = (tarea) => {
    tarea.id = v4();
    dispatch({ type: AGREGAR_TAREA, payload: tarea });
  };
  const obtenerTareas = (idProyecto) => {
    dispatch({ type: OBTENER_TAREAS, payload: idProyecto });
  };
  const eliminarTarea = (idTarea) => {
    dispatch({ type: ELIMINAR_TAREAS, payload: idTarea });
  };

  return (
    <TasksContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        agregarTarea,
        obtenerTareas,
        eliminarTarea,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksState;
