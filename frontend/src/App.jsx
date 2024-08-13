import "./App.css"; ///dont remove added for tailwind css
import { Route, Routes } from "react-router-dom";
import Account from "./Pages/Account";
import Login from "./Componets/Login";


function App() {
  return (
    <div className="w-full flex items-center justify-center">
      {/* <Login></Login> */}
      <div>
        <Routes>
          <Route path="/my-account" Component={Account} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
