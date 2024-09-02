import React from "react";

const Modal = ({
  isOpen,
  onClose,
  children,
  componentRender,
  handalRenderClick,
}) => {
  if (!isOpen) return null;
  const handalBackToHomeClick = (position) => {
    if (position === "backToLogin") {
      handalRenderClick("LogInBack");
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-auto">
        {componentRender.SignUpLogin ? (
          <img
            src="https://d4u5qzkfpc9yt.cloudfront.net/ss_logo_01.png"
            className="w-20 h-12"
            alt="Logo"
          />
        ) : (
          <button
            onClick={() => {
              handalBackToHomeClick("backToLogin");
            }}
          >
            <svg
              class="h-5 w-5 text-stone-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <polyline points="15 6 9 12 15 18" />
            </svg>
          </button>
        )}

        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
