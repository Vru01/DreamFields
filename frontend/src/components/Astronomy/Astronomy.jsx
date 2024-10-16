import React from 'react';
import Header from './Header';
import Hero from './Hero';
import SolarSystem from './SolarSystem';
import InfoCards from './InfoCards';
import Timeline from './Timeline';
import InteractiveLearning from './InteractiveLearning';
import FunFacts from './FunFacts';
import Careers from './Careers';
import { ShootingStars } from '../components/shooting-stars';
import { StarsBackground } from '../components/stars-background';
import Footer from './Footer';

const Astronomy = () => {
  return (
    <div className="relative bg-gradient-to-b from-black to-purple-950 text-white">
      {/* <SolarSystem /> */}
      <StarsBackground/>
      <ShootingStars/>
      
      <div className="relative z-10 pointer-events-auto"> {/* Ensure this div is interactive */}
        <Header />
        <Hero />
        <InfoCards />
        <FunFacts />
        <Timeline />
        <Careers />
        <InteractiveLearning />
        <Footer />
      </div>
    </div>
  );
};

export default Astronomy;
