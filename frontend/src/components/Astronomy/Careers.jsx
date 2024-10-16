import React from 'react';

const Careers = () => (
  <section className="p-10 text-white">
    <h3 className="text-3xl font-bold mb-6">Astronomy Careers</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700">
        <h4 className="text-xl font-semibold mb-2">Astronomer</h4>
        <p>Study celestial bodies and the universe's phenomena, including stars, planets, and galaxies.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700">
        <h4 className="text-xl font-semibold mb-2">Astrophysicist</h4>
        <p>Analyze the physical properties of celestial objects and the forces that affect them.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700">
        <h4 className="text-xl font-semibold mb-2">Space Engineer</h4>
        <p>Design and build spacecraft, satellites, and other technology for exploring space.</p>
      </div>
      {/* Add more career cards as needed */}
    </div>
  </section>
);

export default Careers;
