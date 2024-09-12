import React from "react";

function ServiceButton({serviceName,time,price}) {
  return (
    <button className="bg-transparent text-black py-1 px-3 text-xs rounded-xl border border-black flex-shrink-0 max-h-10 hover:bg-teal-100 transition duration-300">
      {serviceName} • {time} mins • ${price}
    </button>
  );
}

export default ServiceButton;
