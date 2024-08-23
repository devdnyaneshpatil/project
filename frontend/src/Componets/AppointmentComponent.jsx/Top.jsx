import React from "react";
import Heading from "./Heading";
import Pagination from "./Pagination";

function Top() {
  return (
    <div className=" md:flex justify-between  mb-6 sm:block sm:space-y-4">
      <Heading />
      <Pagination />
    </div>
  );
}

export default Top;
