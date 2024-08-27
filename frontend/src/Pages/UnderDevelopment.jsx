import React from 'react';
import { useNavigate } from 'react-router-dom';

const UnderDevelopment = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(-1); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100">
      {/* Your Navbar should be here */}

      <div className="flex-grow flex flex-col items-center justify-center">
        <img
          src="https://e7.pngegg.com/pngimages/211/778/png-clipart-computer-software-ibm-business-software-developer-team-computer-programmers-computer-network-furniture-thumbnail.png"
          alt="Under Development"
          className="max-w-full h-auto mb-8"
        />
        <h1 className="text-2xl text-center md:text-4xl font-bold text-gray-800 mb-4">
          This Feature is Under Development
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 text-center px-4 md:px-0">
          We are working hard to bring this feature to you. Please check back later.
        </p>
        <button
          onClick={handleButtonClick}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Ok, Got it
        </button>
      </div>

      {/* Your Footer should be here */}
    </div>
  );
};

export default UnderDevelopment;
