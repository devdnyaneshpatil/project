import "./App.css";
import { useState } from "react";
// import viteLogo from "./assets/vite.svg"; // Adjust path as needed
import reactLogo from "./assets/react.svg"; // Adjust path as needed

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex space-x-4 mb-4">
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          {/* <img src={viteLogo} className="w-20 h-20" alt="Vite logo" /> */}
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img src={reactLogo} className="w-20 h-20" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-6">Vite + React</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
