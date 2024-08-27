import React from "react";
import { Link } from "react-router-dom";

function Row({ svgcomp, text,link }) {
  return (
    <div className="flex flex-row space-x-4 min-h-12 items-center border-b-2 border-gray-200 cursor-pointer hover:bg-gray-200 p-4 ">
      <div>{svgcomp}</div>
      <div>
        <h6 className="text-[#121111] font-sans text-sm leading-5 font-normal">
          <Link to={link}>{text}</Link>
        </h6>
      </div>
    </div>
  );
}

export default Row;
