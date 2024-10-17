import React from 'react';
// import { Meteors } from '../components/meteors';

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
      <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-11/12 md:w-6/12 h-8/12 transition-transform transform-gpu">
        <h4 className="text-3xl font-bold mb-4 duolingo-font; text-gradient">{title}</h4>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">{content}</p>
        <button 
          className="mt-4 bg-blue-500 text-white py-2 px-6 rounded transition-colors duration-200 hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      {/* <Meteors/> */}
    </div>
  );
};

export default Modal;
