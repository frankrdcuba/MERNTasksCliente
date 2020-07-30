import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [newuser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const { name, email, password, confirm } = newuser;

  const handleChange = (e) => {
    setNewUser({ ...newuser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Regístrate</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Nombre"
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Contraseña"
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirm">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              value={confirm}
              placeholder="Repetir Contraseña"
              onChange={handleChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Crea una cuenta"
            />
          </div>
        </form>
        <Link to="/" className="enlace-cuenta">
          O, Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
