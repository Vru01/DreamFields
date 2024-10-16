import React from 'react';
import { useNavigate } from 'react-router-dom';

const CButton = ({ text, link, color, ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-lg
         px-4 py-2 font-semibold max-h-fit
         transition-colors
         ${color ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-black hover:bg-gray-800'} 
         text-white shadow-md hover:shadow-lg active:shadow-sm focus:outline-none
         focus:ring-2 focus:ring-offset-2 focus:ring-${color ? 'yellow-400' : 'gray-500'}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default CButton;
