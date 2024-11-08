import React from 'react';
import Header from './Header';
// import Hero from './Hero';
import earth from '../../assets/images/earth.png';
// import SolarSystem from './SolarSystem';
import InfoCards from './InfoCards';
import Timeline from './Timeline';
import InteractiveLearning from './InteractiveLearning';
import FunFacts from './FunFacts';
import Careers from './Careers';
// import  {ShootingStars}  from '../Helper/shooting-stars';
// import { StarsBackground } from '../Helper/stars-background';
import Footer from './Footer';
import { astronomyData } from './astronomyData';
import astronaut from '../../assets/images/astronaut.png';
// import uranus from '../../assets/uranus.png'
import VideoComponent from './VideoComponent';

const Astronomy = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-blue-900 text-white">
      {/* <StarsBackground /> */}
      {/* <ShootingStars /> */}

      <div className="relative z-10 pointer-events-auto">
        <Header />

        <section className="flex flex-col items-center bg-transparent  justify-center text-center p-10">
          <h2 className="text-5xl font-extrabold duolingo-font mb-4 text-white">
            {astronomyData.title}
          </h2>
          <p className="mb-6 text-lg text-white ">{astronomyData.definition}</p>
        </section>
        <div className="flex justify-evenly">
          <img src={astronaut} alt="astronaut" height={400} width={400} className="floating" />
          {/* <img src={earth} alt="earth" height={400} width={400}/> */}
          <div className="relative group flex flex-col h-md my-6 bg-gradient-to-br from-blue-800/60 to-blue-900/60 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-900/70 hover:rotate-1 border border-gray-700 rounded-lg w-1/3">
            <div className="mx-3 mb-0 border-b border-gray-700 py-4 px-1">
              <span className="text-3xl duolingo-font text-gray-200 group-hover:text-white font-medium">
                What is Astronomy?
              </span>
            </div>

            <div className="p-4">
              <h5 className="mb-2 text-gray-100 nunito-font text-xl font-semibold">
                Discover the Wonders of Space!
              </h5>
              <p className="text-gray-300 leading-normal font-light">
                Astronomy is the study of stars, planets, and everything else in space. Imagine
                exploring distant galaxies, discovering new planets, and learning about black holes!
                If you love looking up at the night sky and wondering what is out there, then
                astronomy is for you. Who knows, you might even find a new planet someday!
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-around items-center my-10">
          <FunFacts />
          <img src={earth} alt="Black Hole" height={400} width={400} className="floating" />
        </div>
        <Timeline />
        <VideoComponent></VideoComponent>
        <Careers />
        <InteractiveLearning />
        <Footer />
      </div>
    </div>
  );
};

export default Astronomy;
