import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRoutes } from "./routing/AppRoutes";
import Home from "./pages/home/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home/>
  </StrictMode>
);
