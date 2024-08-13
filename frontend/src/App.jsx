import "./App.css"; ///dont remove added for tailwind css
import { Route, Routes } from "react-router-dom";
import Account from "./Pages/Account";
import Login from "./Componets/Login";
import SignUpLogin from "./Componets/SignUpLogin";


function App() {
  return (
    <div className="w-full flex items-center justify-center">
      <SignUpLogin></SignUpLogin>
      <div>
        <Routes>
          <Route path="/my-account" Component={Account} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
