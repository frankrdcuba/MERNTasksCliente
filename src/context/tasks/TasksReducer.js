import { AGREGAR_TAREA, OBTENER_TAREAS, ELIMINAR_TAREAS } from "../../types";
export default (state, action) => {
  switch (action.type) {
    case AGREGAR_TAREA:
      return { ...state, tareas: [...state.tareas, action.payload] };
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
        tareasproyecto: state.tareasproyecto.filter(
          (tarea) => tarea.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};
