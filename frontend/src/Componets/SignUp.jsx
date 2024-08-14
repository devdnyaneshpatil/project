import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp({ handalRenderClick }) {
  const navigate = useNavigate("/my-account");
  const [clickReset, setClickReset] = useState(false);
  ////--------------backClick----------//
  const handalBackToHomeClick = (position) => {
    if (position === "backToLogin") {
      handalRenderClick("LogInBack");
      //navigate("/my-account"); todo need to change the route
    } else if (position === "backToHome") {
      navigate("/my-account");
    }
  };
  ////--------------SignIn------------
  const handalSignInClick = () => {
    /////////validate user cred are correct or not and navigate to respective page
  };

  ///---- handalResetPassword
  const handalResetPassword = () => {
    ///logic to send email to reset
    setClickReset(true);
  };

  return (
    <div className="w-[30rem] bg-white p-8 shadow-lg rounded-lg centre margin-auto pb-20 mt-10 relative">
      <div className="flex justify-between mb-6">
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
        <button
          className="text-blue-500"
          onClick={() => {
            handalBackToHomeClick("backToHome");
          }}
        >
          <svg
            class="h-5 w-5 text-stone-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="text-left mb-6">
        <h4 className="text-2xl font-semibold text-gray-700 ">Sign In</h4>
      </div>
      <div className="mb-4">
        <span className="block text-sm font-medium text-gray-600">Email</span>
        <input
          type="email"
          className="text-black w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4">
        <span className="block text-sm font-medium text-gray-600">
          Password
        </span>
        <input
          type="password"
          className="text-black w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="flex justify-between">
        <div className="mb-4">
          <span className="block text-sm font-medium text-gray-600">
            First Name
          </span>
          <input
            type="text"
            className="text-black w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <span className="block text-sm font-medium text-gray-600">
            Last Name
          </span>
          <input
            type="text"
            className="text-black w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
      <div className="mb-4">
        <span className="block text-sm font-medium text-gray-600">
          First Name
        </span>
        <input
          type="number"
          className="text-black w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button
        onClick={() => {
          handalSignInClick();
        }}
        className="w-full py-2 mt-4 text-white bg-[#737272] rounded-lg hover:bg-black"
      >
        Sign In
      </button>
      <div className="text-center">
        <span className="text-black text-centre text-xs">
          By signing up I agree to the
        </span>{" "}
        <br />
        <span>
          <Link className="text-[blue] text-xs">term of services</Link>
          <span className="text-black text-xs mx-1">and</span>
          <Link className="text-[blue] text-xs">privacy policy</Link>
        </span>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-around p-4 bg-[#f4ebde] rounded h-14">
        <span className="text-stone-900">
          Grow your business with StyleSeat
        </span>
        <button className="bg-[#667d45] text-white rounded px-2 text-xs">
          Set Up My Business
        </button>
      </div>
    </div>
  );
}

export default SignUp;
