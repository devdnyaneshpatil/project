import React, { useState } from 'react';

function Panel() {
  const [active, setActive] = useState('Completed');

  return (
    <div className="flex border-t-2 border-b-2 border-gray-200 space-x-10 pl-6">
      
      <div
        onClick={() => setActive('Completed')}
        className={`cursor-pointer pt-8 pb-2 ${
          active === 'Completed'
            ? 'border-b-2 border-blue-400 text-black font-semibold'
            : 'text-gray-600'
        }`}
      >
        Completed
      </div>
      
      <div
        onClick={() => setActive('Ongoing')}
        className={`cursor-pointer pt-8 pb-2 ${
          active === 'Ongoing'
            ? 'border-b-2 border-blue-400 text-black font-semibold'
            : 'text-gray-600'
        }`}
      >
        Ongoing
      </div>
      
      <div
        onClick={() => setActive('Cancelled')}
        className={`cursor-pointer pt-8 pb-2 ${
          active === 'Cancelled'
            ? 'border-b-2 border-blue-400 text-black font-semibold'
            : 'text-gray-600'
        }`}
      >
        Cancelled
      </div>
      
    </div>
  );
}

export default Panel;
