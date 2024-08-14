import "./App.css"; ///dont remove added for tailwind css
import { Route, Routes, useNavigate } from "react-router-dom";
import Account from "./Pages/Account";
import SignUpLogin from "./Componets/SignUpLogin";
import Loader from "./Componets/Loader";
import { useEffect, useState } from "react";
import SignUp from "./Componets/SignUp";

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigate("/my-account");
    }, 2000);
  }, []);
  return (
    <div className="w-full flex items-center justify-center bg-black min-h-screen">
      {loading ? (
        <Loader></Loader>
      ) : (
        <div>
          <Routes>
            <Route path="/my-account" Component={Account} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
