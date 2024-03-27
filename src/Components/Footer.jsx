import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='d-flex p--10'>
      <div className="d-grid creator">
        <p>Powered by</p>
        <img src="../images/DH.png" alt='DH-logo' width='200' height='40' />
      </div>
      <div className="d-flex social g--10">
        <Link><i className="fa-brands fa-square-facebook"></i></Link>
        <Link><i className="fa-brands fa-instagram"></i></Link>
        <Link><i className="fa-brands fa-tiktok"></i></Link>
        <Link><i className="fa-brands fa-whatsapp"></i></Link>
      </div>
    </footer>
  )
}

export default Footer