import React from "react";

function RefFrendDiv() {
  return (
    <div className="flex justify-center items-center m-auto lg:p-0 sm:p-5 md:p-12">
      <div className="bg-[rgb(252,242,242)] flex rounded-lg lg:w-6/12 lg:h-60 ">
        <div className="lg:p-8 lg:gap-6 flex flex-col text-start p-2 pl-3 w-9/12 gap-1 items-start">
          <h1 className="font-bold text-md lg:text-lg">Better with friend !</h1>
          <span className="text-sm">
            Refer a friend and you'll both get 15% (up to $50) off when you book
            with a new pro.
          </span>
          <button className="bg-black text-white p-1 px-3 rounded-md">
            Share Now
          </button>
        </div>
        <img
          src="https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/booking-referrals.6090ab6643c7a6bf8272.png"
          alt="img"
          className="sm:size-40 lg:size-60 w-5/12"
        />
      </div>
    </div>
  );
}

export default RefFrendDiv;
