import React from "react";

function Row({ svgcomp, text }) {
  return (
    <div className="flex flex-row space-x-4 min-h-12 items-center border-b-2 border-gray-200 cursor-pointer hover:bg-gray-200 p-4 ">
      <div>{svgcomp}</div>
      <div>
        <h6 className="text-[#121111] font-sans text-sm leading-5 font-normal">
          {text}
        </h6>
      </div>
    </div>
  );
}

export default Row;
