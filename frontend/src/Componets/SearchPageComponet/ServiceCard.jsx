import React from "react";
import { FaCrown } from "react-icons/fa";

function ServiceCard() {
  return (
    <div className="w-full  grid md:grid-cols-3 md:grid-rows-2 md:gap-x-2  border-2 mb-4 border-gray-200 rounded-lg sm:grid-cols-1 sm:grid-rows-custom-rows sm:gap-x-0 sm:gap-y-2">
      {/* Left Image Grid */}
      <div className="md:col-span-1 md:row-span-2 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-1 sm:flex  sm:row-span-1 sm:row-start-2 sm:col-span-1">
        <div>
          <img
            src="https://d220aniogakg8b.cloudfront.net/static/uploads/2020/11/09/8618130_0258ec26_300x300.webp"
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div>
          <img
            src="https://d220aniogakg8b.cloudfront.net/static/uploads/2020/10/13/8444975_a4ff661c_300x300.webp"
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div>
          <img
            src="https://d220aniogakg8b.cloudfront.net/static/uploads/2020/10/13/8444978_020f9741_300x300.webp"
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div>
          <img
            src="https://d220aniogakg8b.cloudfront.net/static/uploads/2020/10/13/8444984_4d5693fb_300x300.webp"
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      {/* Right Content Area */}
      <div className="md:col-span-2 md:row-span-1 flex items-center space-x-4 border-b-2 border-gray-100 sm:row-span-1 sm:row-start-1 sm:col-span-1">
        <img
          src="https://d220aniogakg8b.cloudfront.net/static/uploads/2020/10/13/8444975_a4ff661c_300x300.webp"
          alt=""
          className="h-16 w-16 object-cover rounded-full"
        />
        <div>
          <h6 className="text-sm font-semibold">Candacey Phillips</h6>
          <p className="text-xs text-gray-500">Style by Candacey 2.5 mi</p>
          {/* Badge and Rating */}
          <div className="flex items-center space-x-2 mt-1">
            <div className="flex w-3/4 items-center space-x-1 bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
              <FaCrown className="w-4 h-4" />
              <span>Top Pro</span>
            </div>
            <div className="flex text-yellow-500">★★★★☆</div>
          </div>
        </div>
      </div>

      {/* Services and Pricing */}
      <div className="md:col-span-2 md:row-span-2 md:space-x-2 sm:row-span-1 sm:col-span-1 sm:row-start-3 sm:overflow-x-auto  sm:flex sm:flex-nowrap sm:space-x-2 md:block md:space-y-2 sm:scroll-smooth sm:scrollbar-hide">
        <button className="bg-black text-white py-1 px-3 text-xs rounded-xl flex-shrink-0 max-h-10">
          See All Services
        </button>
        <button className="bg-transparent text-black py-1 px-3 text-xs rounded-xl border border-black flex-shrink-0 max-h-10 hover:bg-teal-100 transition duration-300">
          Braids Down & WASH • 105 mins • $100
        </button>
        <button className="bg-transparent text-black py-1 px-3 text-xs rounded-xl border border-black flex-shrink-0 max-h-10 hover:bg-teal-100 transition duration-300">
          Crochet Braids • 150 mins • $160
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
