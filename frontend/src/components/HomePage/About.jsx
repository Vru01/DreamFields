import React from 'react';
import aboutCompany1 from '../../assets/img/about-company-1.jpg'; // Adjust path if necessary
import aboutCompany2 from '../../assets/img/about-company-2.jpg'; // Adjust path if necessary
import aboutCompany3 from '../../assets/img/about-company-3.jpg'; // Adjust path if necessary

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center ">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-up" data-aos-delay="100">
            <p className="text-xl text-yellow-600 font-semibold">Who We Are</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-4 mb-6">
              Empowering Futures Through Career Exploration
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              We are dedicated to guiding the next generation in discovering their passions and unlocking their potential. Our platform is designed to introduce 10-16-year-olds to a wide array of study fields and career opportunities in an engaging, interactive manner.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="bi bi-check-circle text-yellow-500 text-xl mr-3"></i>
                <span className="text-gray-700">
                  Encouraging young minds to explore various careers through interactive quizzes and tailored recommendations.
                </span>
              </li>
              <li className="flex items-start">
                <i className="bi bi-check-circle text-yellow-500 text-xl mr-3"></i>
                <span className="text-gray-700">
                  Providing an intuitive "Know Your Interest" section to align their personal interests with future career paths.
                </span>
              </li>
              <li className="flex items-start">
                <i className="bi bi-check-circle text-yellow-500 text-xl mr-3"></i>
                <span className="text-gray-700">
                  Offering detailed roadmaps for each recommended field, helping students understand necessary skills and opportunities.
                </span>
              </li>
            </ul>
            <a href="#" className="mt-6 inline-flex items-center text-yellow-600 hover:text-yellow-800 transition duration-300">
              <span>Read More</span>
              <i className="bi bi-arrow-right ml-2"></i>
            </a>
          </div>

          <div className="w-full lg:w-1/2 mt-16 " data-aos="fade-up" data-aos-delay="200">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 lg:col-span-1">
                <img src={aboutCompany1} className="rounded-lg shadow-lg object-cover w-full h-72" alt="About Company 1" />
              </div>
              <div className="col-span-2 lg:col-span-1 space-y-4">
                <img src={aboutCompany2} className="rounded-lg shadow-lg object-cover w-full h-36" alt="About Company 2" />
                <img src={aboutCompany3} className="rounded-lg shadow-lg object-cover w-full h-32" alt="About Company 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
