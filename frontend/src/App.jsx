import "./App.css"; ///dont remove added for tailwind css
import { Route, Routes } from "react-router-dom";
import Account from "./Pages/Account";
import Appointment from "./Pages/Appointment";
import SignUpLogin from "./Componets/SignUpLogin";
import OTPVerification from "./Componets/OTPVerification";
import Profile from "./Pages/Profile";
import UnderDevelopment from "./Pages/UnderDevelopment";
import AllServices from "./Pages/AllServices";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
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
