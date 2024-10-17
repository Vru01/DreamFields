import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      icon: "bx bx-brain", // Boxicons class for AI
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
    <div className="flex flex-col lg:flex-row min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className={`bg-gray-900 h-screen text-white lg:w-64 w-full ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="p-4 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(false)} className="text-xl lg:hidden">
            <i className='bx bx-log-out-circle'></i>
          </button>
          <h1 className="text-2xl duolingo-font">DreamFields</h1>
        </div>

        <nav className="mt-4">
          <ul className="text-lg">
            <li className="p-4 flex items-center hover:bg-gray-800 transition duration-200">
              <i className='bx bx-home-alt-2 mr-2'></i>
              <a href="#">Overview</a>
            </li>
            <li className="p-4 flex items-center hover:bg-gray-800 transition duration-200">
              <i className='bx bx-grid-alt mr-2'></i>
              <a href="#">Subjects</a>
            </li>
            <li className="p-4 flex items-center hover:bg-gray-800 transition duration-200">
              <i className='bx bx-folder mr-2'></i>
              <a href="#">Resources</a>
            </li>
            <li className="p-4 flex items-center hover:bg-gray-800 transition duration-200">
              <i className='bx bx-message-square-dots mr-2'></i>
              <a href="#">Messages</a>
            </li>
            <li className="p-4 flex items-center hover:bg-gray-800 transition duration-200">
              <i className='bx bx-cog mr-2'></i>
              <a href="#">Settings</a>
            </li>
            <Link
            className="p-4 flex items-center hover:bg-gray-800 transition duration-200"
            to="/quiz">
                <p>Play Quiz</p>
            </Link>
          </ul>
        </nav>

        <div className="flex flex-col items-center p-4 mt-auto">
          <img src="assets/pro.png" alt="Profile" className="w-16 h-16 rounded-full mb-2" />
          <h2 className="text-center text-lg">Your Name</h2>
          <p className="text-gray-400">Role or Title</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gray-900">
        <header className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-xl">
            <i className='bx bx-menu'></i>
          </button>
          <h5 className="nunito-font text-xl">Hello <b className="bg-gradient-to-r font-extrabold text-2xl from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">REZA</b>, welcome back!</h5>
        </header>

        {/* My Courses */}
        <div className="flex justify-between items-center my-6">
          <div>
            <h3 className="text-3xl font-semibold duolingo-font">My Courses</h3>
          </div>
          <div className="flex items-center border rounded-md px-2 py-1 bg-gray-800">
            <i className='bx bx-search mr-2 text-white'></i>
            <input type="text" placeholder="Search..." className="bg-transparent text-white focus:outline-none"/>
          </div>
        </div>

        {/* Custom Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {fields.map((field, index) => (
            <div key={index} className="bg-gray-800 hover:border-blue-300 border-2 border-b-4 border-blue-950 hover:scale-105 transition-all duration-150 relative p-4 pb-2 rounded-lg shadow-md">
              <div className="flex">
                <div className="flex-grow">
                  <h5 className="font-bold text-2xl duolingo-font mb-2 text-blue-400">{field.title}</h5>
                  <h6 className="text-blue-300 text-lg font-semibold nunito-font">{field.phrase}</h6>
                  <p className="text-gray-400">{field.description}</p>
                </div>
                <i className={field.icon + " text-4xl text-blue-200 mb-2"}></i> {/* Icon */}
              </div>
              <Link to={field.link}>
                <button type="button" className="text-white my-2 bg-gradient-to-br from-blue-500 to-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Explore
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Planning Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-semibold">Planning</h3>
            <a href="#" className="text-blue-50r">View All</a>
          </div>
          <input type="date" className="bg-gray-800 p-2 rounded-md border text-white"/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {["Reading - Topic 1", "Writing - Topic 2", "Listening - Topic 1", "Listening - Topic 2"].map((activity, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-between">
              <div className="flex items-center">
                <i className='bx bx-book text-2xl text-blue-500 mr-4'></i>
                <div>
                  <h5 className="font-semibold">{activity}</h5>
                  <p className="text-gray-400">Due on 15 October</p>
                </div>
              </div>
              <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">Start</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
