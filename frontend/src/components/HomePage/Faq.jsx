import React, { useState } from 'react';
import '../Style/main.css'; 

const Faq = () => {
  // State to manage the active FAQ item
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle active FAQ item
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ Data
  const faqs = [
    {
      question: "How do I choose the right career for me?",
      answer: "It’s important to explore different interests, skills, and strengths you have. Consider trying new activities, internships, or speaking with professionals to learn more about different fields.",
    },
    {
      question: "What if I don't know what I want to do in the future?",
      answer: "That’s completely normal! Many people take time to figure it out. Start by exploring subjects that interest you or join clubs and activities. Over time, your experiences will help guide your decisions.",
    },
    {
      question: "Do I need to have good grades to succeed in my career?",
      answer: "While good grades can help, success also comes from determination, creativity, and practical skills. Focus on learning, staying curious, and developing skills outside of school too, such as communication and problem-solving.",
    },
    {
      question: "How do I know if a career will make me happy?",
      answer: "Happiness in a career often comes from finding something that aligns with your passions and values. Try to focus on what excites you or what you enjoy learning about. Speak with professionals in the field to understand the day-to-day responsibilities.",
    },
    {
      question: "Is it okay to change my career path later?",
      answer: "Absolutely! Many people change their career paths as they grow and learn more about themselves. Your interests and goals might evolve, and that's perfectly fine. What’s most important is to keep learning and be open to new opportunities.",
    },
    {
      question: "What are some careers that combine creativity and technology?",
      answer: "There are many exciting careers that mix creativity with technology, like graphic design, video game development, web development, animation, and digital marketing. These fields let you use both creative and technical skills to build amazing things!",
    },
  ];

  return (
    <section id="faq" className="faq section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${activeIndex === index ? 'faq-active' : ''}`}
                  onClick={() => toggleFaq(index)} // Toggle active state on click
                >
                  <h3>{faq.question}</h3>
                  <div className={`faq-content ${activeIndex === index ? 'show' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
