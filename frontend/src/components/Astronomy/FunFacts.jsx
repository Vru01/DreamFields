import React, { useEffect, useState } from 'react';

const FunFacts = () => {
  const facts = [
    "Venus rotates in the opposite direction to most planets.",
    "A day on Mercury is longer than a year on Mercury.",
    "Jupiter has the shortest day of all the planets.",
    "Neutron stars can spin at a rate of 600 rotations per second.",
    "There are more stars in the universe than grains of sand on all the Earth's beaches.",
    "The Great Wall of Galaxies is a vast group of galaxies that form a large structure in the universe.",
    "One million Earths can fit inside the Sun.",
    "The closest galaxy to us is the Andromeda Galaxy, which is about 2.537 million light-years away.",
    "Black holes are so dense that their gravity prevents light from escaping.",
    "A year on Pluto is equivalent to 248 Earth years.",
    "Saturn is the flattest planet in the Solar System due to its low density and fast rotation.",
    "The universe is expanding, and galaxies are moving away from each other over time.",
    "Water has been found on Mars, and scientists are studying it to see if it could support life.",
    "The Moon is drifting away from Earth at a rate of about 1.5 inches (3.8 cm) per year.",
    "The hottest planet in our solar system is Venus, with surface temperatures hot enough to melt lead.",
    "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.",
    "Neptune has the strongest winds in the solar system, reaching speeds of over 1,200 miles per hour (2,000 km/h).",
    "Some of the largest known stars, like UY Scuti, are over 1,700 times larger than the Sun.",
    "The observable universe is about 93 billion light-years in diameter.",
    "The first living creature in space was a dog named Laika, sent by the Soviet Union in 1957.",
    "There are potentially billions of habitable planets in our galaxy alone.",
    "The Milky Way galaxy is on a collision course with the Andromeda galaxy and will merge in about 4.5 billion years.",
    "The coldest place in the universe is the Boomerang Nebula, with a temperature of -458 degrees Fahrenheit (-272 degrees Celsius).",
    "The Voyager 1 spacecraft, launched in 1977, is the farthest human-made object from Earth.",
    "A single teaspoon of a neutron star would weigh about 6 billion tons.",
    "The surface of Mars has the largest volcano in the solar system, Olympus Mons, which is about 13.6 miles (22 km) high.",
    "The fingerprints of a human hand are unique, just like the patterns of ridges on the surface of the Moon.",
    "In a year, light can travel for about 5.88 trillion miles (9.46 trillion kilometers).",
    "The universe is approximately 13.8 billion years old."
  ];

  const [randomFact, setRandomFact] = useState('');

  useEffect(() => {
    const getRandomFact = () => {
      const randomIndex = Math.floor(Math.random() * facts.length);
      setRandomFact(facts[randomIndex]);
    };

    getRandomFact();

    const interval = setInterval(() => {
      getRandomFact();
    }, 36000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col my-6 bg-gradient-to-b from-slate-600 via-gray-800 to-black shadow-blue-200 border border-blue-700 rounded-lg w-1/2 transform transition-transform duration-300  hover:shadow-slate-200/30 hover:shadow-lg">
      <div className="mx-3 mb-0 border-b border-blue-700 pt-3 pb-2 px-1">
        <span className="text-3xl duolingo-font font-medium text-blue-300">
          🌟 Fun Fact of the Day!
        </span>
      </div>
      
      <div className="p-4">
        <h5 className="mb-2 text-blue-100 text-3xl nunito-font font-bold">
          Did you know?
        </h5>
        <p className="text-white shadow-lg text-xl leading-normal font-light italic">
          {randomFact}
        </p>
      </div>
    </div>

  );
};

export default FunFacts;
