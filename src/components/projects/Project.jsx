import React, { useContext } from "react";
import projectContext from "../../context/projects/ProjectContext";
import tasksContext from "../../context/tasks/TasksContext";

const Project = ({ proyecto }) => {
  const proyectoContext = useContext(projectContext);
  const { actualProyecto } = proyectoContext;
  const tareaContext = useContext(tasksContext);
  const { obtenerTareas } = tareaContext;

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => {
          actualProyecto(proyecto.id);
          obtenerTareas(proyecto.id);
        }}
      >
        {proyecto.name}
      </button>
    </li>
  );
};

export default Project;
