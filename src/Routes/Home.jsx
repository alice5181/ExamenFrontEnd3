import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import axios from 'axios';

const Home = () => {
  const [dataApi, setDataApi] = useState([]);

  
  useEffect(() => {
    try {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          setDataApi(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  },[]);



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
