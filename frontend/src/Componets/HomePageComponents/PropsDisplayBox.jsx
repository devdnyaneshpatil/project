import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../Context/ProductPageContext";

function PropsDisplayBox({ elm }) {
  const { setSearchData, searchData } = useContext(ProductContext);
  const navigate = useNavigate();
  const handalClick = () => {
    setSearchData({ ...searchData, service: elm.props });
    navigate(`/Product-display?category=${elm.props}`);
  };

  return (
    <div
      className="lg:w-40 text-center shadow-lg  rounded-md border bg-white cursor-pointer sm:w-28"
      onClick={handalClick}
    >
      <img
        src={`${elm.img}`}
        alt={`${elm.props}`}
        className="w-full h-auto rounded-t-md"
      />
      <span className="flex font-400 justify-center items-center p-1.5 text-sm">
        {elm.props}
      </span>
    </div>
  );
}

export default PropsDisplayBox;
