// VideoComponent.jsx
import React from 'react';

const VideoComponent = () => {
  return (
    <div className="relative w-full h-auto flex- flex-col justify-center items-center py-10 px-6 bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-700 rounded-lg shadow-lg overflow-hidden cosmic-background">
      <div className=" text-center z-30">
        <h3 className="bg-gradient-to-t from-sky-500 to-indigo-300 bg-clip-text text-transparent  duolingo-font text-4xl my-4  font-bold">
          Welcome to the Children Cosmos!
        </h3>
      </div>

      {/* YouTube Video Container */}
      <div className="relative z-20 mx-auto w-full max-w-3xl rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-64 lg:h-96 rounded-lg"
          src="https://www.youtube.com/embed/8t9RTXtT4lQ?si=Wzs0nJgOnnZJBSpJ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Title or Caption (Optional) */}
    </div>
  );
};

export default VideoComponent;
