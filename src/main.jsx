import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
