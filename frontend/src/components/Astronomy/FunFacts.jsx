import React from 'react';
import { useEffect, useState } from 'react';
import TypingEffect from '../components/Common/TypingEffect';

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

    const [words, setWords] = useState([]);
    const [randomFact, setRandomFact] = useState('');
  
    useEffect(() => {
      const getRandomFact = () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        const selectedFact = facts[randomIndex];
        setRandomFact(selectedFact);
        setWords(selectedFact.split(" ")); // Split the fact into words
      };
      
      getRandomFact();
    }, []);

  return (
    <section className="p-10 bg-gray-800/20 text-white">
      <h3 className="text-3xl font-bold mb-6">Fun Facts About Space</h3>
      <p className="text-lg italic">
        {/* <TypingEffect words={words} period={2000} /> */}
        {randomFact}
      </p>
    </section>
  );
};

export default FunFacts;
