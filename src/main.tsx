import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ScrollWatcher } from "./lib";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ScrollWatcher>
    <App />
  </ScrollWatcher>
);
