// src/components/Main.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     navigate("/login"); 
  //   }
  // }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Left Sidebar */}
      <aside className="w-1/5 bg-gray-800 p-6">
        <h1 className="text-2xl font-bold text-green-400 mb-8">DreamFields</h1>
        <nav>
          <ul>
            <li className="mb-6">
              <a href="#" className="flex items-center text-lg text-gray-300 hover:text-white">
                {/* <span className="material-icons mr-3">home</span>  */}
                Explore Fields
              </a>
            </li>
            <li className="mb-6">
              <a href="#" className="flex items-center text-lg text-gray-300 hover:text-white">
                {/* <span className="material-icons mr-3">emoji_events</span>  */}
                Leaderboards
              </a>
            </li>
            <li className="mb-6">
              <a href="#" className="flex items-center text-lg text-gray-300 hover:text-white">
                {/* <span className="material-icons mr-3">assignment</span>  */}
                Quests
              </a>
            </li>
            <li className="mb-6">
              <a href="#" className="flex items-center text-lg text-gray-300 hover:text-white">
                {/* <span className="material-icons mr-3">shopping_cart</span>  */}
                Resource Library
              </a>
            </li>
            <li className="mb-6">
              <a href="#" className="flex items-center text-lg text-gray-300 hover:text-white">
                {/* <span className="material-icons mr-3">person</span>  */}
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-lg text-gray-300 hover:text-white">
                {/* <span className="material-icons mr-3">more_horiz</span>  */}
                More
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <header className="flex items-center justify-between mb-6">
          <div className="text-lg">
            <h2 className="text-green-400">Section 1: Astronomy</h2>
            <p className="text-gray-300">Exploring the Solar System</p>
          </div>
          <div>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Guidebook</button>
          </div>
        </header>

        {/* Progress */}
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Progress</h3>
          <div className="flex space-x-4 items-center">
            <div className="relative">
              <div className="bg-green-500 text-white p-6 rounded-full text-center font-bold">Start</div>
              <div className="absolute top-0 right-0 bg-green-400 p-2 rounded-full"></div>
            </div>
            <div className="bg-gray-600 w-12 h-12 rounded-full"></div>
            <div className="bg-gray-600 w-12 h-12 rounded-full"></div>
            <div className="bg-gray-600 w-12 h-12 rounded-full"></div>
          </div>
        </div>

        {/* Additional Quizzes/Tasks */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">Quizzes & Challenges</h3>
          <div className="space-y-4">
            <button className="bg-green-500 text-white w-full p-4 rounded">Take Quiz</button>
            <button className="bg-blue-500 text-white w-full p-4 rounded">Explore Astronomy</button>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-1/4 bg-gray-800 p-6">
        <div className="bg-blue-600 text-white p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold">Career Tip of the Day</h3>
          <p>Stay curious, and always explore new things in your field!</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-white">Leaderboard</h3>
          <p className="text-gray-400">You're currently ranked #3 in Astronomy.</p>
        </div>
        <div className="bg-green-600 text-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Earn More Coins!</h3>
          <p>Complete more quizzes and rise to the top.</p>
          <button className="mt-4 bg-white text-green-600 font-bold py-2 px-4 rounded">Go to Leaderboards</button>
        </div>
      </aside>
    </div>
  );
};

export default Main;
