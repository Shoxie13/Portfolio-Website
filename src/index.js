import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import Store from "./contexts/StoreContext";

import "./index.css";

ReactDOM.render(
  <Router>
    <Store>
      <App />
    </Store>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
