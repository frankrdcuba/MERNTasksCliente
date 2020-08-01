import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
          <TransitionGroup>
            {tareasproyecto.map((tarea) => (
              <CSSTransition key={tarea.id} timeout={200} classNames="tarea">
                <Task tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
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
