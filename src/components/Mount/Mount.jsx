import React, { useEffect } from 'react';
import './mount.css';
import msvg from '../../assets/Montañas.svg';
import gsap from 'gsap';

const Mount = () => {
  useEffect(() => {
    
    let animation = gsap.from('.mount', {
      opacity: 0,
      duration: 4,
    });

    return () => {
      animation.revert();
    };
  }, []);
  
  return (
    <div className="mounto">
      <div className="mount">
        <img src={msvg} alt="Montaña" />
      </div>
    </div>
  );
};

export default Mount;
