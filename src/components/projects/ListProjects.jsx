import React from "react";
import Project from "./Project";

const ListProjects = () => {
  const proyectos = [{ name: "Alvilio site" }, { name: "Tienda web" }];
  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Project proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListProjects;
