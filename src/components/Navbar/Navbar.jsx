import React, { useEffect } from 'react';
import './navbar.css';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 3
    }
  }
}

const Navbar = () => {
    useEffect(() => {
      const items = Array.from(document.querySelectorAll('.subitems > a'))
      const animation = gsap.from(items, {
        y: -10,
        stagger: 0.4,
        delay: 3,
        duration: 1,
        opacity: 0
      });

      const animation2 = gsap.from('.line', {
        scaleX: 0,
        delay: 3,
        duration: 1.6,
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
        <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 2100.01">
          <motion.path 
            className="cls-1" 
            d="M3000 2070.01 3000 2100.01 2820 2100.01 2100 930.01 2070 930.01 1590 1410.01 1590 2100.01 1409.99 2100.01 1409.99 1410 930 930.01 900 930.01 180 2100.01 0 2100.01 0 2070.01 780 810.01 780 780.01 30 30.01 30 .01 240 .01 1380 1140.01 1409.99 1140.01 1409.99 0 1590 0 1590 1140.01 1620 1140.01 2760 0 2970 0 2970 30 2220 780.01 2220 810.01 3000 2070.01z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
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

export default Navbar;
