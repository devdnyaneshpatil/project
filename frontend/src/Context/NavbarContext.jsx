import { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState("bg-white");
  const handalClick = (color) => {
    if (color === "white") {
      setBgColor("bg-white");
    } else {
      setBgColor("bg-bgColorBrown opacity-75 border-gray-50");
    }
  };

  return <NavbarContext.Provider value={{bgColor,handalClick}}>{children}</NavbarContext.Provider>;
};
