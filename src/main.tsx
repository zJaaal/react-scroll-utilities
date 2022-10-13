import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Render from "./components/Render";
import ScrollDirection from "./components/ScrollDirection";
import "./index.css";
import BackgroundChange from "./test-components/BackgroundChange";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <h1>Scroll!</h1>
    <ScrollDirection>
      <App />
      <BackgroundChange>
        <Render
          style={{
            height: "inherit",
            position: "relative",
            transform: "translate(30%, 50%)",
          }}
        >
          <h3 className="test-h5">I'm spinning</h3>
        </Render>
      </BackgroundChange>
    </ScrollDirection>
  </React.StrictMode>
);
