import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductPageContext";
import DatePicker from "../Componets/SearchPageComponet/DatePicker";
import Filter from "../Componets/SearchPageComponet/Filter";
import MapComponent from "../Componets/SearchPageComponet/MapComponent";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ServiceCard from "../Componets/SearchPageComponet/ServiceCard";

function SearchPage() {
  //states management
  const [services, setServices] = useState([]);

  const latitude = 40.7128;
  const longitude = -74.006;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const getServices = async (category) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/service?category${category}`
      );
      setServices(data.data.services);
      console.log(services);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices(category);
  }, [category]);

  return (
    <div className="flex gap-5">
      <div className="sm:w-full sm:ml-0 lg:w-6/12 flex-col h-24 p-2 bg-bgColorSearch lg:ml-4 ">
        <div>
          <div className=" flex gap-2 pb-2 ">
            <div className="sm:11/12 flex p-2 lg:w-6/12 rounded-md bg-white gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                type="text"
                className="border-none outline-none"
                placeholder="Services,stylist or salon"
              />
            </div>
            <div className="hidden  lg:flex  p-2 w-6/12 rounded-md bg-white gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <input
                type="text"
                className="border-none outline-none"
                placeholder="City or Zip Code"
              />
            </div>
            <div className="flex  p-1 w-12 rounded-md justify-center items-center bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 color-white text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="flex gap-5">
          <DatePicker></DatePicker>
          <Filter></Filter>
        </div>
        {/* {result from api need to render here} */}
        <div className="mt-10 custom-service-height  overflow-y-scroll scrollbar-hide">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
      <div className="hidden lg:block w-1/2 ">
        <MapComponent latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
}

export default SearchPage;
