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
  return (
    <div className=" ml-2 w-[300px] flex p-3 flex-col h-36 text-sm items-start gap-2 rounded-md bg-white relative  ">
      <span className="font-bold ">{elm.heading}</span>
      <span className="text-xs">{elm.desc}</span>
      <button className="text-white bg-[rgb(102,125,69)] text-xs p-1.5 rounded-md absolute bottom-2">
        Learn More
      </button>
    </div>
  );
}

export default BusinessInfoDiv;
