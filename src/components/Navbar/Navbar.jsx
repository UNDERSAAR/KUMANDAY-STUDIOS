import React, { useEffect } from 'react';
import './navbar.css';
import klogo from '../../assets/KumandayLogo.svg';
import SplitType from 'split-type';
import gsap from 'gsap';

const Navbar = () => {
  useEffect(() => {
    const text1 = new SplitType("#text1");
    const text2 = new SplitType("#text2");
    const text3 = new SplitType("#text3");
    const text4 = new SplitType("#text4");

    const animation = gsap.from([text1.chars, text2.chars, text3.chars, text4.chars], {
      y: -10,
      stagger: 0.04,
      delay: 4,
      duration: .3,
      opacity: 0
    });

    return () => {
      animation.kill(); // Kill the animation when component unmounts
    };
  }, []); // Run effect only once after initial render

  return (
    <div className="navbar">
      <div className="items">
        <img src={klogo} alt="Kumanday Studios" />
        <div className="subitems">
          <a href="#" id="text1" className="char">SOBRE NOSOTROS</a>
          <a href="#" id="text2" className="char">PROYECTOS</a>
          <a href="#" id="text3" className="char">CONTACTO</a>
          <a href="#" id="text4" className="char">MENU</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
