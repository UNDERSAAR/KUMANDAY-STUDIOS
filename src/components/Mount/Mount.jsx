import React, { useEffect } from 'react';
import './mount.css';
import msvg from '../../assets/Montañas.svg';
import gsap from 'gsap';

const Mount = () => {
  useEffect(() => {
    const animation = gsap.from('.mount', {
      opacity: 0,
      duration: 4,
    });
    return () => {
      animation.revert();
    };
  }, []);
  
  return (
    <div className="mount">
        <img src={msvg} alt="Montaña" />
    </div>
  );
};

export default Mount;
