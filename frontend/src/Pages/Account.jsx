import React from "react";

function Account() {
  return (
    <div className=" max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md  border-red-500">
      <h1 className="text-2xl font-bold mb-4 ">Account Settings</h1>
      <p className="text-lg font-semibold text-gray-700 mb-6">
        Dnyaneshwar Patil
      </p>
      <ul className="space-y-4">
        <li className="flex items-center text-lg">
          <span className="mr-4 text-gray-600  ">🎁</span>
          <span>Get $50</span>
        </li>
        <li className="flex items-center text-lg">
          <span className="mr-4 text-gray-600">🏷️</span>
          <span>Promotions</span>
        </li>
        <li className="flex items-center text-lg">
          <span className="mr-4 text-gray-600">💳</span>
          <span>Payment Method</span>
        </li>
        <li className="flex items-center text-lg">
          <span className="mr-4 text-gray-600">💰</span>
          <span>Tip Settings</span>
        </li>
        <li className="flex items-center text-lg">
          <span className="mr-4 text-gray-600">💸</span>
          <span>Automatic Checkout Settings</span>
        </li>
        <li className="flex items-center text-lg">
          <span className="mr-4 text-gray-600">👤</span>
          <span>Contact Information</span>
        </li>
        <li className="flex items-center text-lg">
          <span className="mr-4 text-gray-600">🔒</span>
          <span>Change Password</span>
        </li>
        <li className="flex items-center text-lg">
          <span className="mr-4 text-gray-600"></span>
          <span>Sign in with Apple</span>
        </li>
        <li className="flex items-center text-lg">
          <span className="mr-4 text-gray-600">🔗</span>
          <span>Connect Facebook Account</span>
        </li>
      </ul>
    </div>
  );
}

export default Account;
