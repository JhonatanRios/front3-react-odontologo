import React, { useState } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Contexts/global.context'

const Home = () => {
  const { state } = useContextGlobal()
  // console.log(state.data);
  return (
    <main>
      <h1 className='mb--15'>Home</h1>
      <div className='d-flex card-grid g--15'>
        {state.data.map(item => <Card key={item.id} item={item} />)}
      </div>
    </main>
  )
}

export default Home