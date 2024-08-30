import React, { useState } from "react";

const Drawer = ({ handalClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <svg
        onClick={() => {
          toggleDrawer(), handalClick("black");
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 hover:cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <div
        className={`fixed inset-y-0 left-0 w-80 bg-white border-black text-black transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-1">
          <div className="flex justify-end p-1 ">
            <svg
              onClick={() => {
                toggleDrawer(), handalClick("white");
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 ontent-end hover:cursor-pointer font-semibold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <hr />
          {/* <h2 className="text-xl font-bold mt-4">Drawer Content</h2>
          <p className="mt-4">Some content inside the drawer.</p> */}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
