import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/HomePage/Hero';
import About from '../components/HomePage/About';
import Features from '../components/HomePage/Features';
import Faq from '../components/HomePage/Faq';
import Contact from '../components/HomePage/Contact';
import Footer from '../components/HomePage/Footer';

const Homepage = () => {
  return (
    <div className="homepage flex mx-auto flex-col ">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;



// // import photo from '../assets/photo.png'
// import FieldSlider from '../components/FieldSlider';

// const Homepage = () => {
//   return (
//     <>
//     <div className='BackGround'>


//     </div>

//     {/* <div className='text-white bg-red-400  py-10'>

//       <FieldSlider/>
//     </div> */}
//     </>
//   );
// };

// export default Homepage;
