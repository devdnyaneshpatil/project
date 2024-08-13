import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ handalRenderClick }) {
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
    <div className="w-[30rem] bg-white p-8 shadow-lg rounded-lg centre margin-auto pb-20 mt-24">
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
      <div className="text-center mb-6">
        <h4 className="text-2xl font-semibold text-gray-700">Log In</h4>
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
      <button
        onClick={() => {
          handalSignInClick();
        }}
        className="w-full py-2 mt-4 text-white bg-[#737272] rounded-lg hover:bg-blue-600"
      >
        Sign In
      </button>
      {clickReset ? (
        <div className="text-[#00ff7f] font-bold mt-10 text-center">
          Instruction to reset your password <br />
          have been sent to your mail
        </div>
      ) : (
        <Link
          onClick={() => {
            handalResetPassword();
          }}
          href="#"
          className="block mt-4 text-sm text-center text-[#737272] hover:underline font-bold"
        >
          Forgot Password?
        </Link>
      )}
    </div>
  );
}

export default Login;
