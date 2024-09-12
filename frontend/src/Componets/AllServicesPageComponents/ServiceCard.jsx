import React from "react";

function ServiceCard({ service }) {
  function convertMinTOHour(time) {
    const hour = Math.floor(time / 60)
    const min = time % 60
    return `${hour} hour ${min} min`
  }
  return (
    <div className="p-4 border-b border-gray-300">
      <div className="flex justify-between items-center">
        <h2 className="text-md font-semibold">{service.serviceName}</h2>
        <button className="bg-black text-white py-1 px-3 rounded-md">See Times</button>
      </div>
      <p className="text-gray-500 text-md">${service.price} · {convertMinTOHour(service.time)}</p>
      <p className="text-gray-700 mt-1 text-xs">{service.description}</p>
    </div>
  );
}

export default ServiceCard;
