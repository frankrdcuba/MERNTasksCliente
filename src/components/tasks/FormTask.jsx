import React, { useContext, useState, useEffect } from "react";
import projectContext from "../../context/projects/ProjectContext";
import tasksContext from "../../context/tasks/TasksContext";
const FormTask = () => {
  const [tarea, setTarea] = useState({ name: "", status: false });
  const { name } = tarea;

  const proyectosContext = useContext(projectContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tasksContext);
  const {
    errortarea,
    tareaactual,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    editarTarea,
    limpiarTarea,
  } = tareasContext;

  useEffect(() => {
    if (tareaactual !== null) setTarea(tareaactual);
  }, [tareaactual]);

  if (!proyecto) return null;
  const [proyectoActual] = proyecto;

  const handleChange = (e) => {
    setTarea({ ...tarea, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      validarTarea();
      return;
    }
    if (tareaactual !== null) {
      editarTarea(tarea);
      limpiarTarea();
    } else {
      tarea.idProject = proyectoActual.id;
      agregarTarea(tarea);
    }
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
            value={tareaactual ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTask;
