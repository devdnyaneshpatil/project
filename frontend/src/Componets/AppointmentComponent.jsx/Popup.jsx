import React from "react";
import Avatar from "../Avatar";
import { IoMdClose } from "react-icons/io";

function Popup({ salonName, category, date, startTime, endTime, price, onClose }) {
  return (
    <div className="relative sm:w-60 md:w-96 mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
      {/* Close Icon */}
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        onClick={onClose}
      >
        <IoMdClose size={24} />
      </button>

      {/* Salon Name */}
      <h2 className="text-2xl font-semibold mb-4">{salonName}</h2>

      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <Avatar />
      </div>

      {/* Category */}
      <div className="text-center mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Date */}
      <div className="flex items-center justify-center text-gray-500 mb-4">
        <span className="mr-2">📅</span>
        <span>{date}</span>
      </div>

      {/* Time */}
      <div className="flex justify-between items-center text-gray-500 mb-4">
        <div className="flex items-center">
          <span className="mr-2">🕒</span>
          <span>{startTime}</span>
        </div>
        <span className="mx-2">-</span>
        <div className="flex items-center">
          <span className="mr-2">🕒</span>
          <span>{endTime}</span>
        </div>
      </div>

      {/* Price */}
      <div className="text-center">
        <p className="text-xl font-bold text-green-600">₹{price}</p>
      </div>
    </div>
  );
}

export default Popup;
