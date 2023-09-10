import React from 'react';
import { Link } from 'react-router-dom';
import { useContextGlobal } from './utils/global.context';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { theme, setTheme } = useContextGlobal();


  const cambiarTema = () => {
    // Cambia el tema de 'light' a 'dark' o viceversa
    const nuevoTema = theme === 'light' ? 'dark' : 'light'; //ternario
    setTheme(nuevoTema);
  };


  return (
    <nav className={theme}>
      <div className="icon">
        <img src="/images/DH.ico" alt="DH Icon" />
      </div>
      <button onClick={cambiarTema}>
      {theme === 'light' ? (
          <FontAwesomeIcon icon={faMoon} /> // Icono de la luna para el tema oscuro
        ) : (
          <FontAwesomeIcon icon={faSun} /> // Icono del sol para el tema claro
        )}
      </button>
      <Link to='/'><h4>Home</h4></Link>
      <Link to='/favs'><h4>Favoritos</h4></Link>
      <Link to='/contact'><h4>Contact</h4></Link>
    </nav>
  );
};

export default Navbar;
