import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useContextGlobal } from "../Contexts/global.context"


const Card = ({ item }) => {
  const { name, username, id } = item
  const { state, dispatch } = useContextGlobal()
  const [ isFav, setIsFav ] = useState(state.favs.some(fav => fav.id === item.id))

  const handleAddFav = () => {
    setIsFav(!isFav)
    isFav ? dispatch({ type: 'DELETE_FAV', payload: item.id }) : dispatch({ type: 'ADD_FAV', payload: item })
  }

  return (
    <div className="d-grid card g--10 p--10">
      <Link to={'/dentist/' + item.id}>
        <div className="image">
          <img src="./images/doctor.jpg" alt={name} title={name} width='178' height='178' />
          <p>{id}</p>
        </div>
        <h2>{name}</h2>
        <h3>{username}</h3>
      </Link>
      <button onClick={handleAddFav} className="favButton p--10"><i className={`fa-solid fa-heart ${isFav ? 'isFav' : ''}`}></i></button>
    </div>
  )
}

export default Card