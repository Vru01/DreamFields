import {React } from 'react';
import { useState } from 'react';
// import { Meteors } from '../components/meteors';
import Modal from './Modals';

// Sample JSON data
const careersData = {
  
    "careers": [
      {
        "name": "Astronomer",
        "description": "Astronomers study celestial bodies like stars, planets, and galaxies. They analyze data collected from telescopes to understand the universe, its formation, and behavior.",
        "pathway": {
          "school": "Focus on Physics and Mathematics. Consider optional subjects like Computer Science.",
          "undergraduate": "Pursue a B.Sc. in Physics or Astronomy.",
          "postgraduate": "Opt for an M.Sc. in Astronomy, Astrophysics, or Physics. Advanced research opportunities available through PhD programs."
        },
        "top_colleges": [
          "Indian Institute of Science (IISc), Bangalore",
          "Indian Institute of Space Science and Technology (IIST), Thiruvananthapuram",
          "Indian Institute of Technology (IIT), Kanpur",
          "Inter-University Centre for Astronomy and Astrophysics (IUCAA), Pune"
        ]
      },
      {
        "name": "Astrophysicist",
        "description": "Astrophysicists explore the physical properties of celestial bodies, focusing on the physical theories explaining how they form and behave. They often work on theoretical models and use observational data to confirm hypotheses.",
        "pathway": {
          "school": "Strong foundation in Physics and Mathematics. Participate in science fairs related to space and physics.",
          "undergraduate": "Pursue a B.Sc. in Physics. Some colleges offer B.Sc. in Astrophysics.",
          "postgraduate": "Choose an M.Sc. in Astrophysics or Physics. PhD programs allow for deep specialization."
        },
        "top_colleges": [
          "Tata Institute of Fundamental Research (TIFR), Mumbai",
          "Indian Institute of Science Education and Research (IISER), Pune",
          "Indian Institute of Technology (IIT), Mumbai",
          "Birla Institute of Technology and Science (BITS), Pilani"
        ]
      },
      {
        "name": "Planetary Scientist",
        "description": "Planetary scientists study planets, moons, and planetary systems, including their formation, composition, and evolution. They analyze data from space missions and telescopes.",
        "pathway": {
          "school": "Focus on Geology, Physics, Chemistry, and Mathematics. Participate in Earth sciences activities.",
          "undergraduate": "Choose B.Sc. in Earth Science, Geology, or Physics.",
          "postgraduate": "Specialize with an M.Sc. in Planetary Sciences, Geophysics, or Space Science."
        },
        "top_colleges": [
          "Indian Institute of Science (IISc), Bangalore",
          "Physical Research Laboratory (PRL), Ahmedabad",
          "Jawaharlal Nehru University (JNU), New Delhi",
          "Indian Institute of Technology (IIT), Kharagpur"
        ]
      },
      {
        "name": "Astronaut",
        "description": "Astronauts are trained professionals who travel to space to conduct experiments, repair equipment, and perform various missions in orbit or beyond. They undergo rigorous physical and technical training.",
        "pathway": {
          "school": "Maintain excellent physical fitness and academic skills, especially in Science and Mathematics.",
          "undergraduate": "Pursue degrees in Engineering (Aeronautical, Mechanical, or Electrical), Physics, or Biological Sciences.",
          "additional_training": "Apply to organizations like ISRO. Astronaut candidates need rigorous physical and technical training, usually after completing their education."
        },
        "top_colleges": [
          "Indian Institute of Space Science and Technology (IIST), Thiruvananthapuram",
          "Indian Institute of Technology (IIT), Madras",
          "National Institute of Technology (NIT), Trichy",
          "Delhi Technological University (DTU), New Delhi"
        ]
      },
      {
        "name": "Aerospace Engineer",
        "description": "Aerospace engineers design, develop, and test aircraft, spacecraft, and related systems and equipment. They work on technology for space exploration, defense, and aviation.",
        "pathway": {
          "school": "Excel in Physics, Mathematics, and Computer Science. Participate in robotics clubs or model rocket projects.",
          "undergraduate": "Choose a B.Tech/B.E. in Aerospace Engineering.",
          "postgraduate": "Consider an M.Tech/M.E. in Aerospace Engineering to specialize further."
        },
        "top_colleges": [
          "Indian Institute of Technology (IIT), Bombay",
          "Indian Institute of Technology (IIT), Kanpur",
          "Hindustan Institute of Technology and Science, Chennai",
          "Manipal Institute of Technology (MIT), Manipal"
        ]
      },
      {
        "name": "Astrobiologist",
        "description": "Astrobiologists study the possibility of life in the universe, including the conditions that can support life on other planets. They combine biology, chemistry, and astronomy to explore the origins of life.",
        "pathway": {
          "school": "Develop an interest in Biology, Chemistry, and Physics. Participate in science clubs and projects related to life sciences.",
          "undergraduate": "Choose B.Sc. in Biology, Microbiology, or Biochemistry. Consider a multidisciplinary program if available.",
          "postgraduate": "Specialize with an M.Sc. in Astrobiology, Biotechnology, or Environmental Science."
        },
        "top_colleges": [
          "Indian Institute of Science Education and Research (IISER), Kolkata",
          "Indian Institute of Technology (IIT), Kharagpur",
          "Banaras Hindu University (BHU), Varanasi",
          "University of Delhi (DU), Delhi"
        ]
      },
      {
        "name": "Space Photographer",
        "description": "Space photographers capture stunning images of celestial events, planets, and stars. They often work with telescopes and cameras, sometimes taking images from observatories or space missions.",
        "pathway": {
          "school": "Practice Photography and Art. Learn how to use cameras and editing software. Study Physics to understand light and optics.",
          "undergraduate": "Study Photography or Visual Communication. Alternatively, pursue B.Sc. in Astronomy and self-learn photography.",
          "special_training": "Join workshops on astrophotography and collaborate with astronomy clubs."
        },
        "top_colleges": [
          "National Institute of Design (NID), Ahmedabad",
          "Light & Life Academy, Ooty",
          "Sir J. J. Institute of Applied Art, Mumbai",
          "Jawaharlal Nehru Planetarium, Bangalore"
        ]
      },
      {
        "name": "Science Communicator (Astronomy)",
        "description": "Science communicators explain complex astronomical concepts to the general public through writing, presentations, and media. They help make science accessible and interesting for all audiences.",
        "pathway": {
          "school": "Focus on Writing, Public Speaking, and Science. Join school clubs that promote science communication, like debate or science fairs.",
          "undergraduate": "Pursue B.A. in Journalism and Mass Communication or B.Sc. in Physics/Astronomy with electives in communication.",
          "postgraduate": "Consider an M.Sc. in Science Communication or M.A. in Journalism. Specialized training in science writing can be advantageous."
        },
        "top_colleges": [
          "Indian Institute of Mass Communication (IIMC), New Delhi",
          "Symbiosis Institute of Media and Communication (SIMC), Pune",
          "Asian College of Journalism (ACJ), Chennai",
          "Tata Institute of Fundamental Research (TIFR), Mumbai"
        ]
      }
    ],
    "advice": {
      "participate_in": [
        "Science Olympiads",
        "Competitions",
        "Workshops"
      ],
      "join": [
        "Astronomy Clubs",
        "Online Communities"
      ],
      "take_online_courses": true,
      "read_books_about_space": true
    }
  
};



const Careers = () =>{
  const [isPathwayModalOpen, setPathwayModalOpen] = useState(false);
  const [isCollegesModalOpen, setCollegesModalOpen] = useState(false);
  const [currentCareer, setCurrentCareer] = useState(null);

  const handleViewPathway = (career) => {
    setCurrentCareer(career);
    setPathwayModalOpen(true);
  };

  const handleViewColleges = (career) => {
    setCurrentCareer(career);
    setCollegesModalOpen(true);
  };
  return(
    <section className="relative p-10 text-white bg-gradient-to-b from-gray-800 via-gray-900 to-black overflow-hidden">
    <h3 className="text-4xl font-extrabold mb-6 text-center duolingo-font">🚀 Astronomy Careers</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {careersData.careers.map((career) => (
        <div 
          key={career.name} 
          className="relative bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
        >
          <h4 className="text-2xl font-semibold mb-2">{career.name}</h4>
          <p className="mb-4">{career.description}</p>
          
          <button 
            className="bg-blue-600 text-white py-2 px-4 rounded mr-2" 
            onClick={() => handleViewPathway(career)}
          >
            View Pathway
          </button>
          <button 
            className="bg-blue-400 text-white py-2 px-4 rounded" 
            onClick={() => handleViewColleges(career)}
          >
            View Colleges
          </button>
        </div>
      ))}
    </div>

    {/* Modals for Pathway and Colleges */}
    <Modal 
      isOpen={isPathwayModalOpen} 
      onClose={() => setPathwayModalOpen(false)} 
      title={(<span>
        Pathway for <span className="text-4xl font-bold bg-gradient-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">{currentCareer?.name}</span>
      </span>)}
      content={`
        School: ${currentCareer?.pathway.school}
        Undergraduate: ${currentCareer?.pathway.undergraduate}
        Postgraduate: ${currentCareer?.pathway.postgraduate}
      `}
    />
    <Modal 
      isOpen={isCollegesModalOpen} 
      onClose={() => setCollegesModalOpen(false)} 
      title={(
        <span>
          Top Colleges for <span className="text-blue-700">{currentCareer?.name}</span>
        </span>
      )}
      content={(
        <ul className="list-disc list-inside">
          {currentCareer?.top_colleges.map((college, index) => (
            <li key={index}>{college}</li>
          ))}
        </ul>
      )}
    />

  </section>
  )
}
  

export default Careers;