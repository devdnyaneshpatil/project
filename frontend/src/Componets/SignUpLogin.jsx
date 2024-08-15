import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

function SignUpLogin() {
  const [emailContent, setEmailContent] = useState(false);
  const navigate = useNavigate();
  const [componentRender, setReder] = useState({
    login: false,
    SignUpLogin: true,
    SignUp: false,
  });
  const HandalChnage = (e) => {
    if (e.target.value) {
      setEmailContent(true);
    } else {
      setEmailContent(false);
    }
  };
  ////-------back to home page
  const handalBackToHomeClick = () => {
    navigate("/my-account");
  };
  ///--------
  const handalRenderClick = (clickFrom) => {
    if (clickFrom === "SignUpLogin") {
      setEmailContent(false);
      ////need to fetch datafrom backend and check email is availble or not in database if is then render login else signUp
      setReder({ ...componentRender, SignUpLogin: false, login: true });
    } else if (clickFrom === "LogInBack") {
      setReder({ ...componentRender, SignUpLogin: true, login: false });
    }
  };

  if (componentRender.SignUpLogin) {
    return (
      <div className="w-[30rem] bg-white p-8 shadow-lg rounded-lg centre margin-auto pb-20 mt-24 relative">
        <div className="flex justify-between mb-6 ">
          <img
            src="https://d4u5qzkfpc9yt.cloudfront.net/ss_logo_01.png"
            className="w-20 h-12"
          ></img>
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
        <div className=" mb-6">
          <h4 className="text-2xl font-semibold text-black mt-10">
            Log In or Sign In
          </h4>
        </div>
        <div className="mb-4">
          <span className="block text-sm font-medium text-gray-600">Email</span>
          <input
            onChange={(e) => {
              HandalChnage(e);
            }}
            type="email"
            className="text-black w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {!emailContent ? (
          <button
            className="w-full py-2 mb-20  text-white bg-[#737272] rounded-lg "
            disabled
          >
            Continue
          </button>
        ) : (
          <button
            onClick={() => {
              handalRenderClick("SignUpLogin");
            }}
            className="w-full py-2 mb-20  text-white bg-[#121111] rounded-lg "
          >
            Continue
          </button>
        )}
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
  } else if (componentRender.login) {
    return <Login handalRenderClick={handalRenderClick}></Login>;
  } else if (componentRender.SignUp) {
    return <SignUp></SignUp>;
  }
}

export default SignUpLogin;
