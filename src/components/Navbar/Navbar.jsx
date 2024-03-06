import React from 'react'
import './navbar.css'
import klogo from '../../assets/KumandayLogo.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="items">
        <img src={klogo} alt="Kumanday Studios" />
        <div className="subitems">
          <a href="#">SOBRE NOSOTROS</a>
          <a href="#">PROYECTOS</a>
          <a href="#">CONTACTO</a>
          <a href="#">MENU</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar