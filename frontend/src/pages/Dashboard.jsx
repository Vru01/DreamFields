import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';


const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const fields = [
    {
      title: "Astronomy",
      link: "/astronomy",
      icon: "bx bx-moon", // Boxicons class for astronomy
      phrase: "Reach for the Stars!",
      description: "Explore the universe's wonders and expand your horizons with DreamFields' Astronomy module. Dive into the mysteries of celestial bodies, galaxies, and the cosmos, and let your curiosity illuminate the night sky!",
    },
    {
      title: "Psychology",
      link: "/psychology",
      icon: "bx bx-brain", // Boxicons class for psychology
      phrase: "Unlock the Secrets of the Mind!",
      description: "Delve into the fascinating world of Psychology with DreamFields, where you’ll gain insights into human behavior and emotions. Discover the tools to understand yourself and others, fostering personal growth and deeper connections!",
    },
    {
      title: "Robotics",
      link: "/robotics",
      icon: "bx bx-cog", // Boxicons class for robotics
      phrase: "Build the Future!",
      description: "Step into the exciting realm of Robotics with DreamFields! Learn how to design, build, and program robots that can change the world. Ignite your creativity and technical skills as you bring your ideas to life!",
    },
    {
      title: "Environmental Science",
      link: "/environmental-science",
      icon: "bx bx-leaf", // Boxicons class for environmental science
      phrase: "Protect Our Planet!",
      description: "Join DreamFields' Environmental Science module and become an advocate for our planet. Discover the intricacies of ecosystems, sustainability, and conservation efforts that can make a real impact on our world!",
    },
    {
      title: "Creative Writing",
      link: "/creative-writing",
      icon: "bx bx-pencil", // Boxicons class for creative writing
      phrase: "Let Your Imagination Soar!",
      description: "Unleash your creativity with DreamFields' Creative Writing module! Explore various genres and styles, develop your unique voice, and learn the art of storytelling that captivates and inspires readers.",
    },
    {
      title: "Artificial Intelligence",
      link: "/artificial-intelligence",
      icon: "bx bx-brain", // You can change this icon as needed
      phrase: "Shape Tomorrow's Technology!",
      description: "Dive into the world of Artificial Intelligence with DreamFields! Understand the principles of AI, machine learning, and data analysis to harness technology that can revolutionize industries and improve lives.",
    },
    {
      title: "Mathematics",
      link: "/mathematics",
      icon: "bx bx-calculator", // Boxicons class for mathematics
      phrase: "Solve the Puzzle!",
      description: "Challenge your mind with DreamFields' Mathematics module! From basic concepts to advanced theories, discover the beauty of numbers and problem-solving techniques that apply to everyday life.",
    },
    {
      title: "More Fields",
      link: "/more-fields",
      icon: "bx bx-book", // Boxicons class for more fields
      phrase: "Expand Your Knowledge!",
      description: "Explore a variety of subjects that ignite your passion and curiosity. DreamFields offers a wide range of content designed to inspire and educate, guiding you on your learning journey.",
    },
  ];
  
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white text-gray-800">

  {/* Main Content */}
  <main className="flex-1 p-4 overflow-y-auto rounded-md  h-screen bg-gray-50">
    <header className="flex justify-between items-center bg-gray-200 p-4 rounded-lg shadow-md">
      <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-xl text-gray-700">
        <i className="bx bx-menu"></i>
      </button>
      <h5 className="nunito-font text-xl">
        Hello <b className="bg-gradient-to-r font-extrabold text-2xl from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">REZA</b>, welcome back!
      </h5>
    </header>

    {/* My Courses */}
    <div className="flex justify-between items-center my-6">
      <div>
        <h3 className="text-3xl font-semibold duolingo-font text-gray-800 py-2">
          Explore your <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 bg-clip-text text-transparent">DreamFields</span>
        </h3>
      </div>
      <div className="flex items-center border rounded-md px-2 py-1 bg-gray-200">
        <i className="bx bx-search mr-2 text-gray-600"></i>
        <input type="text" placeholder="Search..." className="bg-transparent text-gray-800 focus:outline-none" />
      </div>
    </div>

    {/* Custom Cards Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {fields.map((field, index) => (
        <div key={index} className="bg-white hover:border-blue-300 border-2 border-b-4 border-blue-100 hover:scale-105 transition-all duration-150 relative p-4 pb-2 rounded-lg shadow-md">
          <div className="flex">
            <div className="flex-grow">
              <h5 className="font-bold text-2xl duolingo-font mb-2 text-blue-600">{field.title}</h5>
              <h6 className="text-blue-400 text-lg font-semibold nunito-font">{field.phrase}</h6>
              <p className="text-gray-600">{field.description}</p>
            </div>
            <i className={`${field.icon} text-4xl text-blue-800 mb-2`}></i>
          </div>
          <Link to={field.link}>
            <button type="button" className="text-white my-2 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-500 font-bold rounded-lg text-md uppercase px-5 py-2.5 text-center">Explore</button>
          </Link>
        </div>
      ))}
    </div>

    {/* Planning Section */}
    <div className="flex justify-between items-center mb-6">
      <div className="flex justify-between w-screen">
        <h3 className="text-lg font-semibold text-gray-800">Planning</h3>
        <a href="#" className="text-blue-500">View All</a>
      </div>
    </div>

    {/* Activities Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {[
            {
              title: "Explore Interests",
              description: "Discover various subjects and find out what piques your curiosity.",
              buttonLabel: "Start Exploring",
              icon: "bx-compass",
              link: "/explore-interests"
            },
            {
              title: "Take a Quiz",
              description: "Answer simple questions to see which field suits you the most.",
              buttonLabel: "Start Quiz",
              icon: "bx-question-mark",
              link: "/quiz"
            },
            {
              title: "View Progress",
              description: "Check your quiz scores and learn how your interests have evolved.",
              buttonLabel: "Check Progress",
              icon: "bx-bar-chart",
              link: "/progress"
            },
            {
              title: "Recommendations",
              description: "Get suggestions on fields that match your interests.",
              buttonLabel: "View Recommendations",
              icon: "bx-bulb",
              link: "/recommendations"
            }].map((activity, index) => (
        <div 
          key={index} 
          className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-between cursor-pointer hover:bg-gray-200"
        >
          <div className="flex mb-3">
            <i className={`${activity.icon} text-2xl text-blue-700 mr-4`}></i>
            <div>
              <h5 className="font-semibold duolingo-font text-xl text-blue-500">{activity.title}</h5>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          </div>
          <button 
            onClick={() => window.location.href = activity.link} 
            className="bg-blue-400 nunito-font border-blue-400 border border-b-4  active:border-b-2 text-white px-3 py-2 rounded-lg hover:bg-blue-500 focus:outline-none transition duration-200"
          >
            {activity.buttonLabel}
          </button>
        </div>
      ))}
    </div>
  </main>

  {/* Right Section */}
  {/* <aside className="bg-gray-200 p-4 lg:w-64 w-full lg:block hidden">
    <div className="flex items-center justify-between mb-6">
      <i className='bx bx-bell text-gray-700'></i>
      <div className="flex items-center">
        <img src="assets/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full mr-2"/>
        <div>
          <h5>Reza Mehdikhanlou</h5>
          <a href="#" className="text-blue-500">Basic Plan</a>
        </div>
      </div>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold mb-2 text-gray-700">Statistics</h4>
      <div className="grid grid-cols-1 gap-4">
        {["Courses", "Total Points", "In Progress", "Tasks Finished"].map((stat, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="flex justify-between">
              <p className="text-gray-500">{stat}</p>
              <h3 className="text-gray-700">02</h3>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold mb-2 text-gray-700">Weekly Work</h4>
      <div className="bg-blue-500 rounded-full h-2"></div>
    </div>
  </aside> */}
</div>

  );
};

export default Dashboard;