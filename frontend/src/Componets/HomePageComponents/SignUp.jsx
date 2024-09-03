import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  ////--------------SignIn------------
  const handalSignInClick = () => {
    /////////validate user cred are correct or not and navigate to respective page
  };

  return (
    <div className="w-[30rem] bg-white p-8 rounded-lg centre margin-auto pb-20 flex flex-col justify-center  relative">
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
