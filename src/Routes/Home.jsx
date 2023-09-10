import React, { useEffect } from 'react';
import { useContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';

const Home = () => {
  const { theme, data, setData} = useContextGlobal();


  //Lamado a la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('No se pudo obtener la data');
        }
        const responseData = await response.json();
        setData(responseData); // Almacena los datos en el contexto global
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, [setData]); // setData como dependencia




  return (
    <main >
      <h1>Home</h1>
      <div className='card-grid'>
          {data.map((user) => (
          <Card user={user} key={user.id}/>
        ))}
      </div>
    </main>
  );
};

export default Home;
