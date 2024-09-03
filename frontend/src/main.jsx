import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NavbarProvider } from "./Context/NavbarContext.jsx";
import { ProductProvider } from "./Context/ProductPageContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavbarProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </NavbarProvider>
  </BrowserRouter>
);
