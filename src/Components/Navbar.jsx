import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ContextGlobal } from '../Contexts/global.context.jsx'

const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal)
  const location = useLocation();

  const handleToggleTheme = () => {
    toggleTheme()
  }

  console.log(location.pathname);

  return (
    <div className='d-flex cont-nav'>
      <Link to='/'><p className='p--10'><strong>DH</strong> Odonto</p></Link>
      <nav className='d-flex g--10 p--10'>
        <Link to='/'>Home</Link>
        <Link to='/favs'>Favoritos</Link>
        <Link to='/contacto'>Contacto</Link>
        <button className='btn-theme' onClick={handleToggleTheme}>
          {state.theme === '' ? '🌙' : '☀️'}
        </button>
      </nav>
    </div>
  )
}

export default Navbar