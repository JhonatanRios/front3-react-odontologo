import React from "react"
import Card from "../Components/Card"
import { useContextGlobal } from "../Contexts/global.context"

const Favs = () => {
  const { state } = useContextGlobal()
  // console.log(state.favs);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className='d-flex card-grid g--15'>
        {state.favs.map(item => <Card key={item.id} item={item} />)}
      </div>
    </>
  )
}

export default Favs