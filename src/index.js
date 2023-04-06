import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import {FavrouiteContent} from "./store/favrouite-contents";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavrouiteContent>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </FavrouiteContent>
  
);
