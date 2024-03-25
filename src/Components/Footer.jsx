import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='d-flex'>
      <div className="d-grid creator g-10">
        <p>Powered by</p>
        <img src="../../public/images/DH.png" alt='DH-logo' width='200' height='40' />
      </div>
      <div className="d-flex social g-10">
        <Link><i class="fa-brands fa-square-facebook"></i></Link>
        <Link><i class="fa-brands fa-instagram"></i></Link>
        <Link><i class="fa-brands fa-tiktok"></i></Link>
        <Link><i class="fa-brands fa-whatsapp"></i></Link>
      </div>
    </footer>
  )
}

export default Footer
