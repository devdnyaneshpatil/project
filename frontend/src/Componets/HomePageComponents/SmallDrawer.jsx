import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function LocationDropdown({ elm }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const Services = ["Braids", "Natural Hair", "Haircut", "Weaves", "Barber"];

  const handleSelect = () => {
    setIsOpen(false);
  };

  return (
    <div className="sm:w-full w-1/2 border-b border-gray-300">
      <div
        className="p-2   flex justify-between items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-gray-700">{elm}</span>
        {isOpen ? (
          <FiChevronUp className="text-gray-500" />
        ) : (
          <FiChevronDown className="text-gray-500" />
        )}
      </div>

      {/* Dropdown drawer */}
      {isOpen && (
        <div className="bg-white flex justify-center text-sm rounded shadow-md">
          {Services.map((Services) => (
            <div
              key={Services}
              className="p-1 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(Services)}
            >
              {Services}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LocationDropdown;
