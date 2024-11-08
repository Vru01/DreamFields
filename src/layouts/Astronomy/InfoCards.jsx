import React from 'react';

const InfoCards = () => (
  <section className="p-10">
    <h3 className="text-3xl font-bold mb-4">Stellar Exploration</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50">
        <h4 className="font-semibold">Stars</h4>
        <p>Learn about the different types of stars...</p>
      </div>
      {/* Additional cards here */}
    </div>
  </section>
);

export default InfoCards;
