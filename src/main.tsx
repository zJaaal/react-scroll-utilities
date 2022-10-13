import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Render from "./components/Render";
import ScrollDirection from "./components/ScrollDirection";
import "./index.css";
import BackgroundChange from "./test-components/BackgroundChange";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ScrollDirection>
      <BackgroundChange>
        <Render>
          <h5>HELLO XD</h5>
        </Render>
        <App />
      </BackgroundChange>
    </ScrollDirection>
  </React.StrictMode>
);
