import React from 'react';

const Timeline = () => (
  <section className="p-10 bg-gray-900 text-white">
    <h3 className="text-3xl font-bold mb-6">Astronomy Through History</h3>
    <div className="space-y-6">
      <div className="flex items-start">
        <div className="w-8 h-8 bg-gradient-to-b from-blue-500 via-blue-300 to-blue-500 rounded-full mt-1"></div>
        <div className="ml-4">
          <h4 className="text-xl font-semibold">1609 - Galileos Telescope</h4>
          <p>
            Galileo Galilei improved the telescope and observed the moons of Jupiter, marking a
            breakthrough in astronomy.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="w-8 h-8 bg-blue-500 rounded-full mt-1"></div>
        <div className="ml-4">
          <h4 className="text-xl font-semibold">1915 - Einsteins Theory of Relativity</h4>
          <p>Einsteins theory revolutionized our understanding of space, time, and gravity.</p>
        </div>
      </div>
      {/* Add more timeline events as needed */}
    </div>
  </section>
);

export default Timeline;
