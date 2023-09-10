import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"; // Importa el archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Card = ({ user }) => {
  const addFav = () => {
    // Aquí iría la lógica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <Link to={`/dentist/${user.id}`}>
        <img
          src="/images/doctor.jpg"
          alt={`Image of ${user.name}`}
          className="card-img" // Aplica la clase CSS para la imagen
        />
        <p>{user.name}</p>
        <p>{user.username}</p>
      </Link>
      <button onClick={addFav} className="favButton">
      <FontAwesomeIcon icon={faHeart} /> 
      </button>
    </div>
  );
};

export default Card;

