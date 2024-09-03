import React, { useContext, useState } from "react";
import Navbar from "../Componets/HomePageComponents/Navbar";
import SearchHome from "../Componets/HomePageComponents/SearchHome";
import PropsDisplayBox from "../Componets/HomePageComponents/PropsDisplayBox";
import { ServiceProps } from "../Componets/HomePageComponents/Data";
import { NavbarContext } from "../Context/NavbarContext";
function HomePage() {
  // const [bgColor, setBgColor] = useState("bg-white");
  // const handalClick = (color) => {
  //   if (color === "white") {
  //     setBgColor("bg-white");
  //   } else {
  //     setBgColor("bg-bgColorBrown opacity-75 border-gray-50");
  //   }
  // };

  const { bgColor } = useContext(NavbarContext);
  return (
    <div className={`lg:${bgColor}  `}>
      {/* <Navbar handalClick={handalClick} bgColor={bgColor} /> */}
      <SearchHome />
      <div className="flex flex-col">
        <span className="flex justify-center p-6 font-semibold text-lg">
          Find pros by service
        </span>
        <div className="lg:m-auto sm:m-auto sm:gap-2 lg:gap-5 grid grid-cols-3 lg:grid-cols-6  items-center">
          {ServiceProps.map((elm) => {
            return <PropsDisplayBox key={elm.id} elm={elm} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
