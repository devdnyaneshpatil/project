import React from "react";

function ServiceCard({ service }) {
  return (
    <div className="p-4 border-b border-gray-300">
      <div className="flex justify-between items-center">
        <h2 className="text-md font-semibold">{service.name}</h2>
        <button className="bg-black text-white py-1 px-3 rounded-md">See Times</button>
      </div>
      <p className="text-gray-500 text-md">{service.price} · {service.duration}</p>
      <p className="text-gray-700 mt-1 text-xs">{service.description}</p>
    </div>
  );
}

export default ServiceCard;
