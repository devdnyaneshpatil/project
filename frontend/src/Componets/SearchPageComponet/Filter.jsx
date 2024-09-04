import React, { useState, useEffect, useRef } from "react";

function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Select Filter");
  const dropdownRef = useRef(null);

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setIsOpen(false);
    // Handle filter logic here based on the selected filter
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseFilter = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={`flex border w-fit py-1 px-3 mt-1 rounded-full items-center gap-1 cursor-pointer ${
          selectedFilter !== "Select Filter"
            ? "bg-black text-white"
            : "bg-white"
        }`}
        onClick={handleToggleDropdown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
          />
        </svg>
        <span className="text-xs">{selectedFilter}</span>
      </div>

      {isOpen && (
        <div className="absolute top-12 left-0 w-48 p-2 bg-white rounded-lg shadow-lg z-10">
          <button
            onClick={handleCloseFilter}
            className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg mb-2"
          >
            Close
          </button>
          <ul className="space-y-2">
            <li
              onClick={() => handleFilterSelect("Price Low to High")}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded-lg"
            >
              Price Low to High
            </li>
            <li
              onClick={() => handleFilterSelect("Price High to Low")}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded-lg"
            >
              Price High to Low
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Filter;
