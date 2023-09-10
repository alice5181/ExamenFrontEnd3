import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const { data } = useContextGlobal();

  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {data.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
