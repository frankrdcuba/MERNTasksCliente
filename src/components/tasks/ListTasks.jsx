import React, { Fragment, useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/ProjectContext";
import tasksContext from "../../context/tasks/TasksContext";

const ListTasks = () => {
  const proyectosContext = useContext(projectContext);
  const { proyecto, eliminarProyecto } = proyectosContext;
  const tareasContext = useContext(tasksContext);
  const { tareasproyecto } = tareasContext;

  if (!proyecto) return <h2>Seleccione un proyecto</h2>;
  const [proyectoActual] = proyecto;

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.name}</h2>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasproyecto.map((tarea) => <Task key={tarea.id} tarea={tarea} />)
        )}
      </ul>
      <button
        className="btn btn-eliminar"
        type="button"
        onClick={() => {
          eliminarProyecto(proyectoActual.id);
        }}
      >
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListTasks;
