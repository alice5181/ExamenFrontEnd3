import React from 'react';
import Card from '../Components/Card';
import { useContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { dataApi } = useContextGlobal();


// modificar esto trayendo del contexto global los datos de la api
  return (
    <main >
      <h1>Home</h1>
      <div className='card-grid'>
          {dataApi.map((user) => (
          <Card user={user} key={user.id}/>
        ))}
      </div>
    </main>
  );
};

export default Home;
