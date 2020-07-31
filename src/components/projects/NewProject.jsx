import React, { Fragment, useState, useContext } from "react";
import projectContext from "../../context/projects/ProjectContext";

const NewProject = () => {
  const [project, setProject] = useState({ name: "" });
  const { name } = project;

  const projectsContext = useContext(projectContext);
  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = projectsContext;

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      mostrarError();
      return;
    }
    agregarProyecto(project);
    setProject({ name: "" });
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarFormulario()}
      >
        Nuevo Proyecto
      </button>

      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <input
            type="submit"
            className="btn btn-block btn-primario"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
      {errorformulario ? (
        <p className="mensaje error">Nombre es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
