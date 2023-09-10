import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState(null);

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
    <div>
      {userDetail ? (
        <div>
          <h1>Detail Dentist id {id}</h1>
          <p>Name: {userDetail.name}</p>
          <p>Email: {userDetail.email}</p>
          <p>Phone: {userDetail.phone}</p>
          <p>Website: {userDetail.website}</p>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default Detail;
