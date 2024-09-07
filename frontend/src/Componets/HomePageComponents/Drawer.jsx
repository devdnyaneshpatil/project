import React, { useState } from "react";
import DrawerComponetPart from "./DrawerComponetPart";
import { DataToWrap } from "./Data";
import { DataToWrapClient } from "./Data";
import { DataToWrapStyle } from "./Data";
import SocialMediaIcon from "./SocialMediaIcon";
const Drawer = ({ handalClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
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

      {/* Overlay to obscure the background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-bgColorBrown opacity-50 z-40"
          onClick={() => {
            toggleDrawer(), handalClick("white");
          }}
        ></div>
      )}

      <div
        className={`fixed inset-y-0 left-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white overflow-y-auto scrollbar-hide text-black transform transition-transform duration-300 ease-in-out z-50 w-full md:w-80 pb-4`}
      >
        <div className="p-2">
          <div className="flex justify-end p-2">
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

          <button className="border px-6 p-2 mt-3 ml-3 bg-black text-white text-sm rounded hover:opacity-75">
            Log In
          </button>
          <div className="flex flex-col">
            <button className="border px-6 p-3 mt-3 ml-3 bg-[#f6faf0] text-black text-sm rounded hover:opacity-75 font-semibold">
              $50 for you, $50 for a friend!
            </button>
          </div>
          <h2 className="mt-4 mb-5 font-bold ml-3 text-xl">
            For Professionals
          </h2>
          <hr />
          {DataToWrap.map((elm) => {
            return <DrawerComponetPart key={elm.id} elm={elm} />;
          })}
          <h2 className="mt-4 mb-5 font-bold ml-3 text-xl">For Clients</h2>
          {DataToWrapClient.map((elm) => {
            return <DrawerComponetPart key={elm.id} elm={elm} />;
          })}
          <h2 className="mt-4 mb-5 font-bold ml-3 text-xl">StyleSeat</h2>
          {DataToWrapStyle.map((elm) => {
            return <DrawerComponetPart key={elm.id} elm={elm} />;
          })}
        </div>
        <h2 className="mt-4 mb-5 font-bold ml-5 text-sm">Follow Us</h2>
        <SocialMediaIcon />
      </div>
    </div>
  );
};

export default Drawer;
