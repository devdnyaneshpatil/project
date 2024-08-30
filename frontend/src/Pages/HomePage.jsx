import React, { useState } from "react";
import Navbar from "../Componets/HomePageComponents/Navbar";

function HomePage() {
  const [bgColor, setBgColor] = useState("bg-white");
  const handalClick = (color) => {
    if (color === "white") {
      setBgColor("bg-white");
    } else {
      setBgColor("bg-bgColorBrown opacity-75 border-gray-50");
    }
  };

  return (
    <div className={`${bgColor} h-screen `}>
      <Navbar handalClick={handalClick} bgColor={bgColor}></Navbar>
    </div>
  );
}

export default HomePage;
