import React, { useState } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Contexts/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
  const { state } = useContextGlobal()
  console.log(state);
  return (
    <main>
      <h1>Home</h1>
      <div className='d-flex card-grid'>
        {state.data.map(item => <Card key={item.id} item={item} />)}
      </div>
    </main>
  )
}

export default Home