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
export default (state, action) => {
  switch (action.type) {
    case AGREGAR_TAREA:
      return {
        ...state,
        tareas: [action.payload, ...state.tareas],
        errortarea: false,
      };
    case OBTENER_TAREAS:
      return {
        ...state,
        tareasproyecto: state.tareas.filter(
          (tarea) => tarea.idProject === action.payload,
        ),
      };
    case ELIMINAR_TAREAS:
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
      };
    case VALIDAR_TAREA:
      return {
        ...state,
        errortarea: true,
      };
    case EDITAR_TAREA:
    case ESTADO_TAREA:
      return {
        ...state,
        tareas: state.tareas.map((tarea) =>
          tarea.id === action.payload.id ? action.payload : tarea,
        ),
      };
    case ACTUAL_TAREA:
      return {
        ...state,
        tareaactual: action.payload,
      };
    case LIMPIAR_TAREA:
      return {
        ...state,
        tareaactual: null,
      };
    default:
      return state;
  }
};
