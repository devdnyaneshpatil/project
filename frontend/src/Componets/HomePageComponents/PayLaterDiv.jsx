import React from "react";

function PayLaterDiv() {
  return (
    <div className="flex justify-center items-center m-auto p-6 sm:p-8 md:p-12 ">
      <img
        src="https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/klarna_learn_more_d.7ea693a14863901ebf9b.png"
        alt="img"
        className="sm:hidden lg:block md:block rounded-lg cursor-pointer w-full md:w-6/12 lg:w-6/12 h-48"
      />
      <img src="https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/klarna_learn_more_m.fe508674074a465b6aab.png" 
      alt="img"
      className="hidden md:hidden lg:hidden sm:block rounded-lg"
      />
    </div>
  );
}

export default PayLaterDiv;
