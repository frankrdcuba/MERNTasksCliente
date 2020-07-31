import React, { useContext, useState } from "react";
import projectContext from "../../context/projects/ProjectContext";
import tasksContext from "../../context/tasks/TasksContext";
const FormTask = () => {
  const [tarea, setTarea] = useState({ name: "", status: false });
  const { name } = tarea;

  const proyectosContext = useContext(projectContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tasksContext);
  const { agregarTarea, obtenerTareas } = tareasContext;

  if (!proyecto) return null;
  const [proyectoActual] = proyecto;

  const handleChange = (e) => {
    setTarea({ ...tarea, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tarea.idProject = proyectoActual.id;
    console.log(tarea);
    agregarTarea(tarea);
    obtenerTareas(proyectoActual.id);
    setTarea({ name: "", status: false });
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea.."
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTask;
