import React from "react";
import { useState, useEffect } from "react";

const Toast = ({ message, type = "success", duration = 3000, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!show) return null;

  const toastStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-white",
    info: "bg-blue-500 text-white",
  };

  //   const [showToast, setShowToast] = useState(false);

  //   const handleShowToast = () => {
  //     setShowToast(true);
  //   };

  //   <div className="p-8">
  //       <button
  //         onClick={handleShowToast}
  //         className="bg-blue-500 text-white px-4 py-2 rounded-lg"
  //       >
  //         Show Toast
  //       </button>

  //       {showToast && (
  //         <Toast
  //           message="This is a success message!"
  //           type="success"
  //           duration={3000}
  //           onClose={() => setShowToast(false)}
  //         />
  //       )}
  //     </div>

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 max-w-xs p-4 rounded-lg shadow-lg flex items-center ${toastStyles[type]} animate-slide-in`}
    >
      <div className="text-sm font-medium">{message}</div>
      <button
        onClick={() => {
          setShow(false);
          if (onClose) onClose();
        }}
        className="ml-4 text-white hover:text-gray-200 focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
};

export default Toast;
