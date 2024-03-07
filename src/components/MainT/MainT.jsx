import React, { useLayoutEffect, useRef } from 'react';
import './maint.css';
import SplitType from 'split-type';
import gsap from 'gsap';

const MainT = () => {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const text = new SplitType('#text', { types: 'chars' });
    const text2 = new SplitType('.lowert', { types: 'words' });

    const animation = gsap.from(text.chars, {
      y: -10,
      stagger: 0.08,
      delay: 1.6,
      duration: 0.4,
      opacity: 0
    });

    const animation2 = gsap.from(text2.words, {
      x: -50,
      stagger: 0.6,
      duration: 1.2,
      opacity: 0
    });

    return () => {
      animation.kill(); 
      animation2.kill();
    };
  }, []);

  return (
    <div className="maint">
      <div className="uppert">
        <h4 id="text" ref={textRef}>MANIZALES, <h3>COLOMBIA.</h3></h4>
      </div>
      <div className="lowert">
        <h4>KUMANDAY</h4><h3>STUDIOS</h3>
      </div>
    </div>
  );
}

export default MainT;
