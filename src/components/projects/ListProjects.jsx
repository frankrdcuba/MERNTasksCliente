import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/ProjectContext";

const ListProjects = () => {
  // extraer proyectos de state inicial
  const projectsContext = useContext(projectContext);
  const { proyectos, obtenerProyectos } = projectsContext;

  // obtener proyetos cuando carga el componente
  useEffect(() => {
    obtenerProyectos();
  }, []);

  // revisa si hay proyectos
  if (proyectos.length === 0)
    return <p>No hay proyectos. Cree un nuevo proyecto</p>;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Project key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListProjects;
