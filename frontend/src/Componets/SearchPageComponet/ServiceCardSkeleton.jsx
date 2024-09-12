import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ServiceCardSkeleton() {
  return (
    <div className="w-full grid md:grid-cols-3 md:grid-rows-2 md:gap-x-2 border-2 mb-4 border-gray-200 rounded-lg sm:grid-cols-1 sm:grid-rows-custom-rows sm:gap-x-0 sm:gap-y-2 animate-pulse">
      {/* Left Image Grid */}
      <div className="md:col-span-1 md:row-span-2 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-1 sm:flex sm:flex-wrap ">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="sm:w-1/4 md:w-full p-1" // Adjust width and padding for small screens
          >
            <Skeleton height={100} className=" w-full h-full" />
          </div>
        ))}
      </div>

      {/* Right Content Area */}
      <div className="md:col-span-2 md:row-span-1 flex items-center space-x-4 border-b-2 border-gray-100 sm:row-span-1 sm:row-start-1 sm:col-span-1">
        <Skeleton circle={true} height={64} width={64} />
        <div>
          <Skeleton width={120} height={16} />
          <Skeleton width={80} height={12} className="mt-1" />
          {/* Badge and Rating */}
          <div className="flex items-center space-x-2 mt-1">
            <Skeleton width={60} height={20} />
            <Skeleton width={40} height={20} />
          </div>
        </div>
      </div>

      {/* Services and Pricing */}
      <div className="md:col-span-2 md:row-span-2 md:space-x-2 sm:row-span-1 sm:col-span-1 sm:row-start-3 sm:overflow-x-auto sm:flex sm:flex-nowrap sm:space-x-2 md:block md:space-y-2 sm:scroll-smooth sm:scrollbar-hide">
        <Skeleton width={120} height={30} className="rounded-xl" />
        {[...Array(3)].map((_, index) => (
          <Skeleton
            key={index}
            width={100}
            height={30}
            className="rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceCardSkeleton;
