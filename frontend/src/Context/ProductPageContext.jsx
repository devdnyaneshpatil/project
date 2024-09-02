import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [searchData, setSearchData] = useState({
    service: "",
    location: "Pune",
  });

  return (
    <ProductContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </ProductContext.Provider>
  );
};
