import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useContextGlobal } from '../Contexts/global.context.jsx'
import { routes } from '../utils/routes.js'

const Navbar = () => {
  const { state, toggleTheme } = useContextGlobal()
  const location = useLocation()
  // console.log(location.pathname)
  return (
    <nav className='d-flex cont-nav'>
      <Link to={routes.home}><p className='p--10'><strong>DH</strong> Odonto</p></Link>
      <div className='d-flex nav g--10 p--10'>
        <Link to={routes.home} className={location.pathname === routes.home ? 'active' : ''}>Home</Link>
        <Link to={routes.favs} className={location.pathname === routes.favs ? 'active' : ''}>Favoritos</Link>
        <Link to={routes.contact} className={location.pathname === routes.contact ? 'active' : ''}>Contacto</Link>
        <button className='btn-theme' onClick={toggleTheme}>{state.theme === '' ? '🌙' : '☀️'}</button>
      </div>
    </nav>
  )
}

export default Navbar