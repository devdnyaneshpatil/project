import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [userData, setUserData] = useState({
    _id: null,
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    smsNotifications: false,
  });

  // fetching the user data from backend
  const fetchUserData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/user/get-user"
      );
      return data.data;
    } catch (error) {
      console.error("Error fetching user data", error);
      return null;
    }
  };

  //handling input change
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  //handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(
        `http://localhost:8080/api/v1/user/update-user/${userData._id}`,
        userData
      );
      console.log(data);
    } catch (error) {
      console.error("Error updating user data", error);
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserData();
      if (data) {
        setUserData({
          _id: data._id,
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
          mobile: data.mobile || "",
          smsNotifications: data.smsNotifications || false,
        });
      }
      console.log(data); // Log the fetched data
    };
    getUserData();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="sm:w-full sm:bg-gray-50 md:w-3/4 p-8">
        <div>
          <h4 className="text-sm font-semibold mb-6 text-center">
            Contact Information
          </h4>
        </div>
        <hr />
        <div className="mt-10">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-xs font-medium mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={userData.firstName}
                className="w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none"
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                className="block text-xs font-medium mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={userData.lastName}
                className="w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-xs font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={userData.email}
                readOnly
                className="w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none"
              />
            </div>

            <div>
              <label
                className="block text-xs font-medium mb-2"
                htmlFor="mobile"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                value={userData.mobile}
                className="w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none"
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="smsNotifications"
                  className="w-4 h-4 text-gray-400 border-gray-200 rounded focus:ring-gray-300"
                  checked={userData.smsNotifications} // Controlled checkbox
                  onChange={handleChange}
                />
                <span className="ml-2 text-xs">SMS Notifications</span>
              </label>
            </div>

            <div>
              <p className="text-xs">
                Yes, send me automated appointment reminders & info about my
                bookings (message & data rates may apply).
              </p>
              <p className="text-sm md:block sm:hidden">
                I acknowledge that the number provided above belongs to me and
                that I'm not required to consent as a condition of purchasing
                any goods or services. I can opt out at any time and will notify
                StyleSeat if my number changes.
              </p>
            </div>

            <div>
              <input
                type="submit"
                value="Save"
                className="w-full bg-black text-white text-xs rounded-lg py-4 mt-4 hover:bg-gray-800 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
