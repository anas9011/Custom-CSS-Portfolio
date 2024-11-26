import React from 'react'
import Navbar from './Navbar';
import '../app/styles/hero.css';

const Hero = () => {
  return (
    <div id='hero' className="hero-container">
    
    
      <Navbar />
      <div className='hero-container '>
        <div className='hidden lg:block'></div>
        <div className='hero-text'>
          <div className='hero-msin'>
            <p data-aos="fade-up">I Am</p>
            <p data-aos="fade-up">Anas</p>
            <p data-aos="fade-up">Shakil</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
