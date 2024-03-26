import React from "react";
import { Link } from "react-router-dom";


const Card = ({ item }) => {
  const { name, username } = item;
  console.log(item);
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="d-grid card g--10 p--10">
      <Link>
        <img src="./images/doctor.jpg" alt={name} title={name} width='178' height='178' />
        <h2>{name}</h2>
        <h3>{username}</h3>
      </Link>
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton p--10">❤️</button>
    </div>
  );
};

export default Card;
