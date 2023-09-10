import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useContextGlobal} from './utils/global.context';

const Card = ({ user }) => {
  const { data, setData } = useContextGlobal();

  const addFav = () => {
    // Verificar si el usuario ya está en favoritos
    const isAlreadyFav = data.some((favUser) => favUser.id === user.id);

    if (!isAlreadyFav) {
      // Clonar el estado actual de data y agregar el usuario a favoritos
      const newData = [...data, user];
      setData(newData);

      // Guardar los favoritos en localStorage
      localStorage.setItem('favorites', JSON.stringify(newData));
    }
  };

  return (
    <div className="card">
      <Link to={`/dentist/${user.id}`}>
        <img
          src="/images/doctor.jpg"
          alt={`Image of ${user.name}`}
          className="card-img"
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
