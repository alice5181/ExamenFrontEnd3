import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [userDetail, setUserDetail] = useState(null);
  const { id } = useParams(); // useParams para obtener el valor del parámetro dinámico "id"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error('No se pudo obtener la data');
        }
        const responseData = await response.json();
        setUserDetail(responseData);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {userDetail ? (
        <div>
          <h1>Detail Dentist Id: {id}</h1>
          <p>Name: {userDetail.name}</p>
          <p>Email: {userDetail.email}</p>
          <p>Phone: {userDetail.phone}</p>
          <p>Website: {userDetail.website}</p>
          {/* Aquí se muestra la información detallada del usuario */}
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </>
  );
};

export default Detail;
