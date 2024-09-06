import React from "react";
import LocationDropdown from "./SmallDrawer";
const Data = [
  "Dallas",
  "Houston",
  "Chicago",
  "Detroit",
  "Atlanta",
  "Chalotte",
  "Washington D.C.",
  "Columbus",
  "Los Angeles",
  "Newport News",
];
function PopularHairStyleDiv() {
  return (
    <div className="flex-col flex items-center justify-center p-6 ">
      <h3 className="font-bold text-2xl">Browse popular hair services</h3>
      <div className="lg:w-[700px] sm:w-full mt-5 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-1 lg:gap-3  ">
        {Data.map((elm) => {
          return <LocationDropdown key={elm} elm={elm} />;
        })}
      </div>
    </div>
  );
}

export default PopularHairStyleDiv;
