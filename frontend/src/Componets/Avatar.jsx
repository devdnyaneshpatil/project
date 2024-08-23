import React from 'react';

function Avatar() {
  return (
    <div className="flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbG9ufGVufDB8fDB8fHww" // Dummy image URL
        alt="Avatar"
        className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
      />
    </div>
  );
}

export default Avatar;
