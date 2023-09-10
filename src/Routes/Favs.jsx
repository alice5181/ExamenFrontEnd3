import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from '../Components/utils/global.context';


const Favs = () => {
  

  return (
    <>
    <div >
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
      </div>
    </>
  );
};

export default Favs;