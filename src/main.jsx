import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterDOOM } from "./RouterDOOM.JSX";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <RouterDOOM></RouterDOOM>
    </StrictMode>
  </BrowserRouter>
);
