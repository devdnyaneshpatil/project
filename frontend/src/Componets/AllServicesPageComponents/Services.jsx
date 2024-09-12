import React from "react";
import ServiceCard from "./ServiceCard";

function Services({ services, userDetails }) {
  const availability = userDetails.availability || {};
  const location = userDetails.location || {}
  console.log(location)
  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Services Section */}
      <div className="w-full md:w-4/6 ">
        <div className="border-b pb-3">
          <h3 className="text-md font-thin pl-4">Services ({services.length})</h3>
        </div>
        <div className="space-y-4 mt-4">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>

      {/* Location and About Section */}
      <div className="hidden md:block md:w-2/6 p-4">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-md font-semibold mb-2">Location</h2>
          <p className="text-gray-700">{ location.address}</p>
          <p className="text-gray-700">{ location.city}</p>
          <p className="text-gray-700">{location.state}</p>
          <p className="text-gray-700">{location.postalCode}</p>
          <p className="text-gray-700">{ location.phoneNumber}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <div className="flex items-center mb-4">
            <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full mr-2">
              Top Pro
            </span>
            <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              StyleSeat Verified
            </span>
          </div>
          <div className="mb-4">
            <h3 className="text-md font-medium mb-2">Hours of Operation</h3>
            {[
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ].map((day) => (
              <p className="text-gray-700 text-sm" key={day}>
                {day}:{" "}
                {availability[day]?.open && availability[day]?.close
                  ? `${availability[day].open} - ${availability[day].close}`
                  : "Closed"}
              </p>
            ))}
          </div>

          <div>
            <h3 className="text-md font-medium mb-2">
              No-Show / Late Cancellation Policy
            </h3>
            <p className="text-gray-700 text-xs">
              You will not be charged if you cancel at least 24 hours before
              your appointment starts. Otherwise, you will be charged 25% of
              service price for cancelling with less than 24 hours notice and
              50% if you fail to show up at your appointment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
