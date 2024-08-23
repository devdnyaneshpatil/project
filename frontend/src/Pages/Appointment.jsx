import React, { useState } from "react";
import Data from "../Componets/AppointmentComponent.jsx/Data";
import Panel from "../Componets/AppointmentComponent.jsx/panel";
import Top from "../Componets/AppointmentComponent.jsx/Top";
import Popup from "../Componets/AppointmentComponent.jsx/Popup";

function Appointment() {
  const [visiblePopup, setVisiblePopup] = useState(null);

  const handleViewClick = (salon) => {
    setVisiblePopup(salon);
  };

  const handleClosePopup = () => {
    setVisiblePopup(null);
  };

  const salons = [
    { id: 1, salonName: "Salon 1", category: "Haircut", date: "2024-08-24", startTime: "10:00 AM", endTime: "11:00 AM", price: "₹50" },
    { id: 2, salonName: "Salon 2", category: "Spa", date: "2024-08-25", startTime: "12:00 PM", endTime: "01:00 PM", price: "₹100" },
    { id: 1, salonName: "Salon 1", category: "Haircut", date: "2024-08-24", startTime: "10:00 AM", endTime: "11:00 AM", price: "₹50" },
    { id: 2, salonName: "Salon 2", category: "Spa", date: "2024-08-25", startTime: "12:00 PM", endTime: "01:00 PM", price: "₹100" },
    { id: 1, salonName: "Salon 1", category: "Haircut", date: "2024-08-24", startTime: "10:00 AM", endTime: "11:00 AM", price: "₹50" },
    { id: 2, salonName: "Salon 2", category: "Spa", date: "2024-08-25", startTime: "12:00 PM", endTime: "01:00 PM", price: "₹100" },
    // Add more salon data here...
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="md:w-3/4 sm:w-full sm:pl-4 sm:pr-4 bg-gray-50 ">
        <Top />
        <Panel />
        <div>
          {salons.map((salon) => (
            <div key={salon.id}>
              <Data onViewClick={() => handleViewClick(salon)} />
              {visiblePopup && visiblePopup.id === salon.id && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <Popup
                    salonName={visiblePopup.salonName}
                    category={visiblePopup.category}
                    date={visiblePopup.date}
                    startTime={visiblePopup.startTime}
                    endTime={visiblePopup.endTime}
                    price={visiblePopup.price}
                    onClose={handleClosePopup}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Appointment;
