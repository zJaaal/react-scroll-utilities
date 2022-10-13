import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ScrollDirection from "./components/ScrollDirection";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ScrollDirection>
      <App />
    </ScrollDirection>
  </React.StrictMode>
);
