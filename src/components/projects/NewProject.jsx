import React, { Fragment, useState } from "react";

const NewProject = () => {
  const [project, setProject] = useState({ name: "" });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //   validar
    // enviar form
    // reniciar form
  };

  const { name } = project;
  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
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
    </Fragment>
  );
};

export default NewProject;
