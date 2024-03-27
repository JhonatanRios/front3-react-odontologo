import React, { useEffect, useState } from 'react'
import { useContextGlobal } from '../Contexts/global.context';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const params = useParams()
  const { state, dispatch } = useContextGlobal()
  const { dentistSelected, favs } = state
  const [ isFav, setIsFav ] = useState(false)

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    const checkIsFav = () => {
      setIsFav(favs.some(fav => fav.id === dentistSelected.id))
    }

    axios(url)
      .then(res => {
        dispatch({ type: 'GET_DENTIST', payload: res.data });
        checkIsFav()
      })
      .catch(error => console.error('Error fetching dentist data:', error))
  }, [url, dispatch, favs, dentistSelected.id])

  return (
    <>
      <h1 className='mb--15'>Detail Dentist #{dentistSelected.id}</h1>
      <div className="d-grid cont-detail g--10">
        <picture>
          <img src="../images/doctor.jpg" alt={dentistSelected.name} title={dentistSelected.name} width='150' height='150' />
        </picture>
        <div className="d-grid info g--10 p--20">
          <p className='fav'><i className={`fa-solid fa-heart ${isFav ? 'isFav' : ''}`}></i></p>
          <h2><strong>Nombre:</strong> {dentistSelected.name}</h2>
          <h3><strong>User:</strong> {dentistSelected.username}</h3>
          <p><strong>Email:</strong> {dentistSelected.email}</p>
          <p><strong>Tel:</strong> {dentistSelected.phone}</p>
          <Link className='m--0' to={dentistSelected.website}><strong>www:</strong> {dentistSelected.website}</Link>
        </div>
      </div>
    </>
  )
}

export default Detail