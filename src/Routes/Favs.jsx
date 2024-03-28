import React from "react"
import Card from "../Components/Card"
import { useContextGlobal } from "../Contexts/global.context"

const Favs = () => {
  const { state } = useContextGlobal()
  // console.log(state.favs)
  return (
    <>
      <h1 className="mb--15">Dentists Favs</h1>
      <div className='d-flex card-grid g--15'>
        {state.favs.length === 0 ? <p>Selecciona algún profesional para que lo listemos en esta página</p> : state.favs.map(item => <Card key={item.id} item={item} />)}
      </div>
    </>
  )
}

export default Favs