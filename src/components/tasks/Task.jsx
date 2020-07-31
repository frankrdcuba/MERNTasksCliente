import React, { useContext } from "react";
import tasksContext from "../../context/tasks/TasksContext";
import projectContext from "../../context/projects/ProjectContext";

const Task = ({ tarea }) => {
  const tareasContext = useContext(tasksContext);
  const { eliminarTarea, obtenerTareas } = tareasContext;

  const proyectoContext = useContext(projectContext);
  const { proyecto } = proyectoContext;
  const [proyectoActual] = proyecto;

  const handleDelete = (idTarea) => {
    eliminarTarea(idTarea);
    // obtenerTareas(proyectoActual.id);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.name}</p>
      <div className="estado">
        {tarea.status ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
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
