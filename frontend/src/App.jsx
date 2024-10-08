import "./App.css"; ///dont remove added for tailwind css
import { Route, Routes } from "react-router-dom";
import Account from "./Pages/Account";
import Appointment from "./Pages/Appointment";

import OTPVerification from "./Componets/OTPVerification";
import Profile from "./Pages/Profile";
import UnderDevelopment from "./Pages/UnderDevelopment";
import AllServices from "./Pages/AllServices";
import HomePage from "./Pages/HomePage";
import { useContext } from "react";
import { NavbarContext } from "./Context/NavbarContext";
import Navbar from "./Componets/HomePageComponents/Navbar";
import SearchPage from "./Pages/SearchPage";
import SignUpLogin from "./Componets/HomePageComponents/SignUpLogin";

function App() {
  // const { bgColor, handalClick } = useContext(NavbarContext);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/Product-display" Component={SearchPage} />
        <Route path="/OTP" Component={OTPVerification} />
        <Route path="/Sign-Up" Component={SignUpLogin} />
        <Route path="/my-account" Component={Account} />
        <Route path="/appointment" Component={Appointment} />
        <Route path="/my-profile" Component={Profile} />
        <Route path="/under-development" Component={UnderDevelopment} />
        <Route path="/all-services" Component={AllServices} />
      </Routes>
    </div>
  );
}

export default App;

///-----verify OTP ---page
///-----signUp
///-----login
////-----
