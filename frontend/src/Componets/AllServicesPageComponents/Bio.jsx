import React from "react";
import { FaCrown, FaRegHeart } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import Avatar from "../Avatar";
function Bio() {
  return (
    <div className="w-full flex justify-between py-6 ">
      <div className="flex space-x-4">
        <div>
          <Avatar />
        </div>
        <div>
          <h4>Renata J</h4>
          <p className="text-xs">Stylist at Kings Saloon</p>
          {/* I want to create a badge here with the text top pro and add any icon inside that which will be looks like a crown  */}
          <div className="flex w-3/4 items-center space-x-1 bg-yellow-200 text-yellow-800 px-2 py-1 mt-4 rounded-full text-xs font-semibold">
            <FaCrown className="w-4 h-4" />
            <span>Top Pro</span>
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <FaRegHeart className="w-6 h-6 text-gray-700" />
        <FiShare className="w-6 h-6 text-gray-700" />
      </div>
    </div>
  );
}

export default Bio;
