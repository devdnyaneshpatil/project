import React, { useState } from "react";
import Avatar from "../Avatar";

function Data({ onViewClick }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="max-w-2xl my-6 relative p-4 border rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-100"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Salon Avatar and Details */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Avatar />
          <div>
            <h2 className="text-xl font-semibold">Salon Name</h2>
            <div className="flex space-x-2 text-gray-500">
              <p>📅 26 Aug</p>
              <p>🕒 2:00PM</p>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="text-right">
          <p className="text-xl font-bold text-green-600">₹50</p>
        </div>
      </div>

      {/* Hidden Div Appears on Hover */}
      {hover && (
        <div className="mt-4 p-4 border-t border-gray-300 rounded-b-lg bg-gray-500 shadow-lg">
          <button className="px-4 py-2 mr-4 bg-red-500 text-white rounded-full shadow hover:bg-red-600">
            Cancel
          </button>
          <button className="px-4 py-2 mr-4 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600">
            Message
          </button>
          <button
            className="px-4 py-2 mr-4 bg-green-500 text-white rounded-full shadow hover:bg-green-600"
            onClick={onViewClick}
          >
            View
          </button>
        </div>
      )}
    </div>
  );
}

export default Data;
