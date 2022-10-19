import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Render from "./lib/components/Render";
import ScrollWatcher from "./lib/components/ScrollWatcher";
import "./index.css";
import BackgroundChange from "./test-components/BackgroundChange";
import Circle from "./test-components/Circle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ScrollWatcher>
      <h1>Scroll!</h1>
      <App />
      <BackgroundChange>
        <Render
          style={{
            height: "inherit",
            position: "relative",
            transform: "translate(80%, 50%)",
          }}
        >
          <h3 className="test-h3">I'm spinning</h3>
        </Render>

        <Circle>
          <h3 className="test-h3">I'm spinning</h3>
        </Circle>
      </BackgroundChange>
    </ScrollWatcher>
  </React.StrictMode>
);
