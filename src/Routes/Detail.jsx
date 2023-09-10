import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css'; 

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
    <div className="detail-container">
      {userDetail ? (
        <div>
          <h1>Detail Dentist id {id}</h1>
          <table className="detail-table">
            <tbody>
              <tr>
                <th>Name:</th>
                <td>{userDetail.name}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{userDetail.email}</td>
              </tr>
              <tr>
                <th>Phone:</th>
                <td>{userDetail.phone}</td>
              </tr>
              <tr>
                <th>Website:</th>
                <td>{userDetail.website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default Detail;
