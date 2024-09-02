import React, { useContext, useState } from "react";
import Drawer from "./Drawer";
import { NavbarContext } from "../../Context/NavbarContext";
import SignUpLogin from "../SignUpLogin";

function Navbar() {
  const { handalClick, bgColor } = useContext(NavbarContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={`flex items-center justify-between p-4 border-inherit border w-full bg-white lg:static lg:p-8 z-50`}
      >
        <Drawer handalClick={handalClick} />
        <img
          className="h-10 lg:h-14 hover:cursor-pointer"
          src="https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/styleseat-logo-black.7c171fdeae89bb381fb1.svg"
          alt="Logo"
        />
        <div className="flex ">
          <button
            className="hidden lg:block mr-3 p-1 font-semibold "
            onClick={() => setIsModalOpen(true)}
          >
            Log In
          </button>
          <button
            className={`border rounded-md p-2 lg:p-3 ${
              bgColor === "bg-white" ? "bg-oliveGreen" : "bg-bgColorBrown"
            } text-white text-xs font-light`}
          >
            Set Up My Business
          </button>
        </div>
      </div>
      <SignUpLogin isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}

export default Navbar;
