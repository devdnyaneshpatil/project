import React from "react";
import SearchComponent from "./SearchComponet";

function SearchHome() {
  return (
    <div className="sm:p-6 max-w-7xl flex flex-col lg:flex-row m-auto lg:p-0  bg-bgColorSearch">
      <div className="w-full lg:w-1/2 h-auto lg:h-96 relative flex justify-center items-center flex-col lg:pl-4">
        <span className="sm:text-xl lg:text-3xl font-bold text-center lg:text-left mb-8">
          Discover & book local <br />
          beauty professionals
        </span>
        <SearchComponent />
        <div className="hidden lg:flex absolute bottom-0 gap-2 font-bold">
          <span>Grow your business with StyleSeat</span>
          <button className="border rounded-md px-3 bg-oliveGreen text-white text-xs font-light">
            Set Up My Business
          </button>
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          src="https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/posing_model_banner.6ede5ab14cd065f47452.png"
          alt="Img"
        />
      </div>
    </div>
  );
}

export default SearchHome;
