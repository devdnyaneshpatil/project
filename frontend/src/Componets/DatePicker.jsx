import React, { useState } from "react";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import advancedFormat from "dayjs/plugin/advancedFormat"; // to handle the "Do" format

dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(advancedFormat);

function DatePicker() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const daysInMonth = currentDate.daysInMonth();
  const firstDayOfMonth = currentDate.startOf("month").weekday();
  const daysOfWeek = dayjs.weekdaysShort();
  const daysArray = [...Array(daysInMonth).keys()].map((i) => i + 1);

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const handleDateClick = (day) => {
    const date = currentDate.date(day);
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  const formatSelectedDate = (date) => {
    return date ? date.format("ddd, MMM Do") : "Select Date";
  };

  return (
    <div className="relative">
      <div
        className="flex border w-fit py-1 px-3 mt-1 rounded-full items-center gap-1 bg-white cursor-pointer"
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008Zm0-4.5h.008v.008H12v-.008Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008Zm0-4.5h.008v.008H9.75v-.008Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008ZM16.5 15h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5v-.008Z"
          />
        </svg>
        <span className="text-xs">{formatSelectedDate(selectedDate)}</span>
      </div>
      {isCalendarOpen && (
        <div className="absolute top-12 left-0 w-80 p-4 bg-white rounded-lg shadow-md z-10">
          <div className="flex justify-between items-center mb-4">
            <button onClick={handlePrevMonth} className="text-gray-600">
              &lt;
            </button>
            <h2 className="text-lg font-semibold">
              {currentDate.format("MMMM YYYY")}
            </h2>
            <button onClick={handleNextMonth} className="text-gray-600">
              &gt;
            </button>
          </div>
          <div className="grid grid-cols-7 text-center">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="font-semibold">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 text-center mt-2">
            {Array(firstDayOfMonth)
              .fill(null)
              .map((_, index) => (
                <div key={index}></div>
              ))}
            {daysArray.map((day) => (
              <div
                key={day}
                onClick={() => handleDateClick(day)}
                className={`p-2 text-sm rounded-lg cursor-pointer ${
                  dayjs().isSame(currentDate.date(day), "day")
                    ? "bg-blue-500 text-white"
                    : selectedDate?.isSame(currentDate.date(day), "day")
                    ? "bg-green-500 text-white"
                    : "text-gray-700"
                } hover:bg-blue-200`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DatePicker;
