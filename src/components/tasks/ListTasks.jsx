import React, { Fragment } from "react";
import Task from "./Task";

const ListTasks = () => {
  const tareas = [
    { name: "Elegir Plataforma", status: true },
    { name: "Elegir Colores", status: false },
    { name: "Elegir Dominio", status: false },
    { name: "Elegir Plataforma de pago", status: true },
  ];

  return (
    <Fragment>
      <h2>Proyecto: Tienda web</h2>
      <ul className="listado-tareas">
        {tareas.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareas.map((tarea) => <Task tarea={tarea} />)
        )}
      </ul>
      <button className="btn btn-eliminar" type="button">
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListTasks;
