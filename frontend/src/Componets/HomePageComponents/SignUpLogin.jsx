import React, { useState } from "react";

import Login from "./Login";
import SignUp from "./SignUp";
import Modal from "./Modal";

function SignUpLogin({ isModalOpen, setIsModalOpen }) {
  const [emailContent, setEmailContent] = useState(false);
  const [componentRender, setRender] = useState({
    login: false,
    SignUpLogin: false,
    SignUp: true,
  });

  const HandalChnage = (e) => {
    setEmailContent(!!e.target.value);
  };

  const handalRenderClick = (clickFrom) => {
    if (clickFrom === "SignUpLogin") {
      setEmailContent(false);
      setRender({ ...componentRender, SignUpLogin: false, login: true });
    } else if (clickFrom === "LogInBack") {
      setRender({ ...componentRender, SignUpLogin: true, login: false });
    }
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        componentRender={componentRender}
        handalRenderClick={handalRenderClick}
      >
        {componentRender.SignUpLogin ? (
          <div className="w-[30rem] bg-white p-8 rounded-lg mx-auto text-center pb-20 relative">
            <div className="mb-6">
              <h4 className="text-2xl font-semibold text-black mt-10">
                Log In or Sign In
              </h4>
            </div>
            <div className="mb-4">
              <span className="block text-sm font-medium text-left text-gray-600">
                Email
              </span>
              <input
                onChange={HandalChnage}
                type="email"
                className="text-black w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {!emailContent ? (
              <button
                className="w-full py-2 mb-20 text-white bg-[#737272] rounded-lg"
                disabled
              >
                Continue
              </button>
            ) : (
              <button
                onClick={() => handalRenderClick("SignUpLogin")}
                className="w-full py-2 mb-20 text-white bg-[#121111] rounded-lg"
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
        ) : componentRender.login ? (
          <Login handalRenderClick={handalRenderClick} />
        ) : (
          <SignUp />
        )}
      </Modal>
    </>
  );
}

export default SignUpLogin;
