import React, { useState } from 'react';
import "../Style/main.css";


// Importing images correctly
import feature1 from '../../assets/img/features-1.jpg'; // Adjust path if necessary
import feature2 from '../../assets/img/features-2.jpg'; // Adjust path if necessary
import feature3 from '../../assets/img/features-3.jpg'; // Adjust path if necessary
import tab1 from '../../assets/img/tabs-1.jpg'; // Adjust path if necessary
import tab2 from '../../assets/img/tabs-2.jpg'; // Adjust path if necessary
import tab3 from '../../assets/img/tabs-3.jpg'; // Adjust path if necessary

const Features = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Data for tabs and features
  const featuresData = [
    {
      id: 1,
      title: 'Modi sit est dela pireda nest',
      description: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      imgSrc: tab1,
    },
    {
      id: 2,
      title: 'Unde praesenti mara setra le',
      description: 'Recusandae atque nihil. Delectus vitae non similique magnam molestiae sapiente similique tenetur aut voluptates sed voluptas ipsum voluptas',
      imgSrc: tab2,
    },
    {
      id: 3,
      title: 'Pariatur explica nitro dela',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Debitis nulla est maxime voluptas dolor aut',
      imgSrc: tab3,
    },
  ];

  const featuresDetails = [
    {
      id: 1,
      imgSrc: feature1,
      title: 'Corporis temporibus maiores provident',
      description: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      id: 2,
      imgSrc: feature2,
      title: 'Neque ipsum omnis sapiente quod quia dicta',
      description: 'Quidem qui dolore incidunt aut. In assumenda harum id iusto lorena plasico mares',
      list: [
        'Et corporis ea eveniet ducimus.',
        'Exercitationem dolorem sapiente.',
        'Veniam quia modi magnam.',
      ],
    },
  ];

  return (
    <>
      <section id="features" className="features section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
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
