import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from '../Contexts/global.context.jsx'

const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal)

  const handleToggleTheme = () => {
    toggleTheme()
  }

  return (
    <div className='d-flex cont-nav'>
      <Link to='/'><p className='p--10'><strong>DH</strong> Odonto</p></Link>
      <nav className='d-flex g--10 p--10'>
        <Link to='/'><h4>Home</h4></Link>
        <Link to='/favs'><h4>Favoritos</h4></Link>
        <Link to='/contacto'><h4>Contacto</h4></Link>
        <button className='btn-theme' onClick={handleToggleTheme}>
          {state.theme === '' ? '🌙' : '☀️'}
        </button>
      </nav>
    </div>
  )
}

export default Navbar