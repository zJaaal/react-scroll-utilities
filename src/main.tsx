import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ScrollWatcher } from "./lib";
import TestEnvironment from "./TestEnvironment";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ScrollWatcher>
    {/* <App /> */}
    {/* <TestEnvironment /> */}
  </ScrollWatcher>
);
