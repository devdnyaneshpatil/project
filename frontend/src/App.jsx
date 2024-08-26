import "./App.css"; ///dont remove added for tailwind css
import { Route, Routes } from "react-router-dom";
import Account from "./Pages/Account";
import Appointment from "./Pages/Appointment";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/my-account" Component={Account} />
        <Route path="/appointment" Component={Appointment}/>
      </Routes>
    </div>
  );
}

export default App;
