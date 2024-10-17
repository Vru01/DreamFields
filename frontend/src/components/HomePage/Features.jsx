import React, { useState } from 'react';
import "../Style/main.css";

import feature1 from '../../assets/img/features-1.jpg';
import feature2 from '../../assets/img/features-2.jpg';
import feature3 from '../../assets/img/features-3.jpg';
import tab1 from '../../assets/img/tabs-1.jpg';
import tab2 from '../../assets/img/tabs-2.jpg';
import tab3 from '../../assets/img/tabs-3.jpg';

const Features = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Updated content for career guidance
  const featuresData = [
    {
      id: 1,
      title: 'Explore Your Strengths',
      description: 'Discover what you excel at through our personalized assessments and guidance tools, helping you identify your key strengths.',
      imgSrc: tab1,
    },
    {
      id: 2,
      title: 'Career Paths Tailored to You',
      description: 'We provide insights into a wide range of career options that align with your personal interests and strengths.',
      imgSrc: tab2,
    },
    {
      id: 3,
      title: 'Actionable Career Plans',
      description: 'Get step-by-step plans and resources to pursue your chosen career path, including educational opportunities and certifications.',
      imgSrc: tab3,
    },
  ];

  const featuresDetails = [
    {
      id: 1,
      imgSrc: feature1,
      title: 'Comprehensive Career Assessments',
      description: 'Our detailed assessments analyze your skills, interests, and personality traits to provide career suggestions that fit you perfectly.',
    },
    {
      id: 2,
      imgSrc: feature2,
      title: 'Interactive Counseling Sessions',
      description: 'Join our live career counseling sessions where experts offer advice and answer your queries.',
      list: [
        'Tailored career advice.',
        'One-on-one counseling options.',
        'Guided group discussions.',
      ],
    },
  ];

  return (
    <>
      <section id="features" className="features section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>Explore our career counseling tools and resources designed to help you discover your true potential and plan your future career.</p>
        </div>

        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 d-flex align-items-center">
              <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
                {featuresData.map((feature) => (
                  <li className="nav-item" key={feature.id}>
                    <a
                      className={`nav-link ${activeTab === feature.id ? 'active show' : ''}`}
                      onClick={() => setActiveTab(feature.id)}
                      role="button"
                    >
                      <i className={`bi bi-${feature.id === 1 ? 'binoculars' : feature.id === 2 ? 'box-seam' : 'brightness-high'}`}></i>
                      <div>
                        <h4 className="d-none d-lg-block">{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
                {featuresData.map((feature) => (
                  <div
                    key={feature.id}
                    className={`tab-pane fade ${activeTab === feature.id ? 'active show' : ''}`}
                    id={`features-tab-${feature.id}`}
                  >
                    <img src={feature.imgSrc} alt={feature.title} className="img-fluid" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Details Section */}
      <section id="features-details" className="features-details section">
        <div className="container">
          {featuresDetails.map((detail, index) => (
            <div className="row gy-4 justify-content-between features-item" key={detail.id}>
              <div className={`col-lg-6 ${index % 2 === 0 ? '' : 'order-2 order-lg-1'}`} data-aos="fade-up" data-aos-delay="100">
                <img src={detail.imgSrc} className="img-fluid" alt={detail.title} />
              </div>
              <div className={`col-lg-5 d-flex align-items-center ${index % 2 === 0 ? '' : 'order-1 order-lg-2'}`} data-aos="fade-up" data-aos-delay="200">
                <div className="content">
                  <h3>{detail.title}</h3>
                  <p>{detail.description}</p>
                  {detail.list && (
                    <ul>
                      {detail.list.map((item, index) => (
                        <li key={index}><i className="bi bi-easel flex-shrink-0"></i> {item}</li>
                      ))}
                    </ul>
                  )}
                  <a href="#" className="btn more-btn">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
