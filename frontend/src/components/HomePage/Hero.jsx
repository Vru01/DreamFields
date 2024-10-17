import React from 'react';
import '../Style/main.css'; 
import heroBgLight from '../../assets/img/hero-bg-light.webp'; // Update path as necessary
import heroServicesImg from '../../assets/img/hero-services-img.webp'; // Update path as necessary

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="hero-bg">
        <img src={heroBgLight} alt="Hero Background" />
      </div>
      <div className="container text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 data-aos="fade-up">
            Welcome to <span>DreamFields</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Quickly start your explore tour now and set the stage for success
            <br />
          </p>
          <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
            <a href="#about" className="btn-get-started">Get Started</a>
            <a 
              href="https://www.youtube.com/watch?v=laM9Jxmzs9E" 
              className="glightbox btn-watch-video d-flex align-items-center">
              <i className="bi bi-play-circle"></i>
              <span>Watch Video</span>
            </a>
          </div>
          <img 
            src={heroServicesImg} 
            className="img-fluid hero-img" 
            alt="" 
            data-aos="zoom-out" 
            data-aos-delay="300" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
