import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Project from "./Project";
import projectContext from "../../context/projects/ProjectContext";

const ListProjects = () => {
  // extraer proyectos de state inicial
  const projectsContext = useContext(projectContext);
  const { proyectos, obtenerProyectos } = projectsContext;

  // obtener proyetos cuando carga el componente
  useEffect(() => {
    obtenerProyectos();
    // eslint-disable-next-line
  }, []);

  // revisa si hay proyectos
  if (proyectos.length === 0)
    return <p>No hay proyectos. Cree un nuevo proyecto</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto.id} classNames="proyecto" timeout={200}>
            <Project proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListProjects;
