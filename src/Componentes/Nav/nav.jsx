import React from "react";
import { Link, NavLink } from "react-router-dom"; // Importamos Link y NavLink
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Icono de login
import "./nav.css";

const Header = ({ setLoginModalVisible, handleModalOpen }) => {
  return (
    <header>
      <a href="#" className="logo">
        <img 
          src="https://res.cloudinary.com/dj9nrp8r8/image/upload/v1743541162/uoej7chlbmy7ubizryqv.png" 
          alt="Logo Tlaolli" 
        />
      </a>

      <nav className="navbar">
        <ul>
          {/* Usamos NavLink para manejar rutas activas */}
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/proyecto" className={({ isActive }) => (isActive ? 'active' : '')}>
              Proyecto
            </NavLink>
          </li>
          <li>
            <Link to="/#alumnos">Equipo</Link>
          </li>
        </ul>
      </nav>

      <div className="izq" id="loginIcon">
        {/* Botón para abrir el modal de login */}
        <button onClick={() => setLoginModalVisible(true)}>
          <FontAwesomeIcon icon={faUser} /> Login
        </button>
      </div>
    </header>
  );
};

export default Header;
