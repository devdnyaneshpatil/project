import { Route, Routes } from "react-router-dom";
import Account from "./Pages/Account";

function App() {
  return (
    <>
      <Routes>
        <Route path="/my-account" Component={Account}/>
      </Routes>
    </>
  );
}

export default App;
