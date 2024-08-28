import React from "react";

function Option({ icon, text, hidden }) {
  return (
    <div
      className={`flex-shrink-0 text-center ${
        hidden ? "md:hidden" : ""
      }`}
    >
      <div className="w-24 h-10 border-2 rounded-md flex items-center justify-center bg-gray-200">
        {icon}
      </div>
      <h3 className="text-xs">{text}</h3>
    </div>
  );
}

export default Option;
