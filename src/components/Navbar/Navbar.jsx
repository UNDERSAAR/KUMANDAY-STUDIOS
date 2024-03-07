import React, { useEffect } from 'react';
import './navbar.css';
import klogo from '../../assets/KumandayLogo.svg';
import gsap from 'gsap';

const Navbar = () => {
    useEffect(() => {
      const items = Array.from(document.querySelectorAll('.subitems > a, .items > img'))
      const animation = gsap.from(items, {
        y: -10,
        stagger: 0.4,
        delay: 4,
        duration: 1,
        opacity: 0
      });

      const animation2 = gsap.from('.line', {
        scaleX: 0,
        delay: 3.5,
        duration: 1,
        opacity: 0
      })

      return () => {
        animation.revert();
        animation2.revert();
      };
    }, []);

  return (
    <div className="navbar">
      <div className="line"></div>
      <div className="items">
        <img src={klogo} alt="Kumanday Studios" />
        <div className="subitems">
          <a href="#" >SOBRE NOSOTROS</a>
          <a href="#">PROYECTOS</a>
          <a href="#">CONTACTO</a>
          <a href="#">MENU</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar
