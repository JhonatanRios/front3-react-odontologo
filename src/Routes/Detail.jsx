import React from 'react'
import { useContextGlobal } from '../Contexts/global.context';

const Detail = () => {
  const { state } = useContextGlobal()
  console.log(state);
  console.log(state.dentistSelect);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail