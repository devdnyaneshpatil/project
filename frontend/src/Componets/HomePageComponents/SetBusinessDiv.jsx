import React from "react";
import BusinessInfoDiv from "./BusinessInfoDiv";
import { BusinessData } from "./Data";

function SetBusinessDiv() {
  return (
    <div className="sm:w-10/12 sm:h-[530px] sm:mt-8 rounded-md lg:w-9/12 justify-center flex items-center m-auto lg:mt-20 bg-[rgb(209,206,174)] h-[400px] relative ">
      <img
        className="z-0 absolute bottom-0 left-0 sm:bottom-20 lg:bottom-0"
        src="https://www.styleseat.com/bundles/static/assets/home/landing_page/manny.png"
        alt="Img"
      />
      <div className="sm:w-full sm:p-3 sm:items-center  lg:w-9/12 absolute right-0 h-full flex items-center flex-col lg:pt-16 gap-2 ">
        <h4 className="sm:text-xl sm:text-center lg:text-3xl font-semibold ">
          Set up your business on StyleSeat
        </h4>
        <p className="sm:text-center text-sm">
          Join the largest network of clients searching for top professionals.
        </p>
        <button className="sm:mt-0 bg-black text-sm text-white p-2 rounded-lg lg:mt-4">
          Learn More
        </button>
        <div className="relative w-full h-full overflow-hidden rounded-md lg:ml-6">
          <div className="lg:w-full  lg:absolute lg:bottom-4 lg:flex  flex overflow-x-auto snap-x snap-mandatory scroll-smooth sm:mt-56">
            {BusinessData.map((elm) => {
              return <BusinessInfoDiv key={elm.id} elm={elm} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetBusinessDiv;

//sm:w-full sm:overflow-x-auto w-full absolute bottom-4 flex flex-row gap-4
