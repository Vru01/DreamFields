import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from "react";
import Slider from "react-slick";

const FieldSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Adjust according to screen size
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768, // Small tablets and large mobile phones
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480, // Mobile phones
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  const fieldsOfStudy = [
    { name: "Astronomy", icon: "🔭" },
    { name: "Paleontology", icon: "🦖" },
    { name: "Psychology", icon: "🧠" },
    { name: "Robotics", icon: "🤖" },
    { name: "Art", icon: "🎨" },
    { name: "Engineering", icon: "⚙️" },
    { name: "Medicine", icon: "💉" },
    { name: "Computer Science", icon: "💻" },
    { name: "Biology", icon: "🧬" },
    { name: "Chemistry", icon: "⚗️" },
    { name: "Physics", icon: "🔬" },
    { name: "Mathematics", icon: "➗" },
    { name: "Geology", icon: "🪨" },
    { name: "Music", icon: "🎶" },
    { name: "Literature", icon: "📚" },
    { name: "History", icon: "📜" },
    { name: "Political Science", icon: "🏛️" },
    { name: "Economics", icon: "💰" },
    { name: "Philosophy", icon: "💭" },
    { name: "Architecture", icon: "🏛️" },
    { name: "Sociology", icon: "👥" },
    { name: "Anthropology", icon: "🦴" },
    { name: "Law", icon: "⚖️" },
    { name: "Linguistics", icon: "🗣️" },
    { name: "Culinary Arts", icon: "🍽️" },
    { name: "Fashion Design", icon: "👗" },
    { name: "Astronautics", icon: "🚀" }
  ];
  

  return (
    <div className='flex justify-center items-center relative w-screen'>
        <div className="w-11/12 px-10 py-6"> {/* Added relative for absolute positioning of arrows */}
            <Slider {...settings}>
                {fieldsOfStudy.map((field, index) => (
                <div key={index} className="text-center">
                    <div className="flex items-center justify-center gap-1"> {/* Updated layout */}
                    <div className="text-2xl">{field.icon}</div>
                    <p className="mt-2 text-gray-700 font-bold">{field.name}</p>
                    </div>
                </div>
                ))}
            </Slider>
        </div>
    </div>
    
  );
};

// Custom arrow components for navigation
function SampleNextArrow({ onClick }) {
  return (
    <div
      className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 cursor-pointer text-4xl"
      onClick={onClick}
      role="button"  // Accessibility improvement
      aria-label="Next Slide"  // Accessibility improvement
      tabIndex={0}  // Makes it focusable with keyboard
    >
      ➡️
    </div>
  );
}

// Custom previous arrow with polished styles
function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 cursor-pointer text-4xl"
      onClick={onClick}
      role="button"  // Accessibility improvement
      aria-label="Previous Slide"  // Accessibility improvement
      tabIndex={0}  // Makes it focusable with keyboard
    >
      ⬅️
    </div>
  );
}

export default FieldSlider;
