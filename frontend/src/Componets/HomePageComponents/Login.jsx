import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ handalRenderClick }) {
  const [clickReset, setClickReset] = useState(false);

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
    <div className="w-[30rem] bg-white p-8  rounded-lg centre margin-auto pb-20 ">
      <div className="text-left mb-6">
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
        className="w-full py-2 mt-4 text-white bg-[#737272] rounded-lg hover:black"
      >
        Log In
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
