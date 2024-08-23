import React from "react";

function Pagination() {
  return (
    <div className="flex items-center justify-center  rounded-lg w-72 p-2">
      <button
        className="px-3 py-1 text-gray-700 border rounded-l-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={false} // Set to true if on the first page
      >
        Previous
      </button>

      <button className="px-3 py-1 mx-1 text-blue-500 border hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
        1
      </button>
      <button className="px-3 py-1 mx-1 text-gray-700 border hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
        2
      </button>
      <button className="px-3 py-1 text-gray-700 border rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Next
      </button>
    </div>
  );
}

export default Pagination;
