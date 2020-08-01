import React, { useContext } from "react";
import tasksContext from "../../context/tasks/TasksContext";
import projectContext from "../../context/projects/ProjectContext";

const Task = ({ tarea }) => {
  const tareasContext = useContext(tasksContext);
  const {
    eliminarTarea,
    obtenerTareas,
    cambiarEstadoTarea,
    tareaActual,
  } = tareasContext;

  const proyectoContext = useContext(projectContext);
  const { proyecto } = proyectoContext;
  const [proyectoActual] = proyecto;

  const handleDelete = (idTarea) => {
    eliminarTarea(idTarea);
    obtenerTareas(proyectoActual.id);
  };
  const handleOnclick = (tarea) => {
    if (tarea.status) {
      tarea.status = false;
    } else {
      tarea.status = true;
    }
    cambiarEstadoTarea(tarea);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.name}</p>
      <div className="estado">
        {tarea.status ? (
          <button
            type="button"
            className="completo"
            onClick={() => handleOnclick(tarea)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => handleOnclick(tarea)}
          >
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => tareaActual(tarea)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => handleDelete(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
