import React, { useState } from "react";
import Drawer from "./Drawer";

function Navbar() {
  const [bgColor, setBgColor] = useState("bg-white");
  const handalClick = (color) => {
    if (color === "white") {
      setBgColor("bg-white");
    } else {
      setBgColor("bg-bgColorBrown opacity-75");
    }
  };
  return (
    <>
      <div
        className={`flex items-center justify-between p-8 border-inherit border ${bgColor}`}
      >
        <Drawer handalClick={handalClick} />
        <img
          className="h-14 hover:cursor-pointer"
          src="https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/styleseat-logo-black.7c171fdeae89bb381fb1.svg"
          alt="Logo"
        />
        <div className="flex ">
          <button className="mr-3 p-1 font-semibold ">Log In</button>
          <button
            className={`border rounded-md p-3 ${
              bgColor == "bg-white" ? "bg-oliveGreen" : "bg-bgColorBrown"
            } text-white text-xs font-light`}
          >
            Set Up My Business
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
