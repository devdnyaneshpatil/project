import React from "react";

const data = [
  {
    id: 1,
    heading: "Grow your business",
    desc: "Unlock business growth by using our marketing tools to attract new clients.",
  },
  {
    id: 2,
    heading: "Manage your business",
    desc: "Take charge of your business and make booking and scheduling a breeze.",
  },
  {
    id: 3,
    heading: "Elevate your client experience",
    desc: "Prioritize client satisfaction with features that create a seamless booking experience. ",
  },
];

function BusinessInfoDiv({ elm }) {
  // if(elm.id==1)
  return (
    <div className=" ml-2 lg:w-[300px] sm:w-[250px] flex p-3 flex-col lg:h-36 sm:h-32 text-sm items-start gap-2 rounded-md bg-white relative lg:flex-shrink sm:flex-shrink-0  sm:snap-start">
      <span className="font-bold ">{elm.heading}</span>
      <span className="text-xs">{elm.desc}</span>
      <button className="text-white bg-[rgb(102,125,69)] text-xs p-1.5 rounded-md absolute bottom-2">
        Learn More
      </button>
    </div>
  );
}

export default BusinessInfoDiv;
