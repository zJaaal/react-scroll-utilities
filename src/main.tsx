import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Render from "./lib/components/Render";
import ScrollWatcher from "./lib/components/ScrollWatcher";
import "./index.css";
import BackgroundChange from "./test-components/BackgroundChange";
import Circle from "./lib/components/circle/Circle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
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
    </BackgroundChange>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        rowGap: 100,
        width: 1200,
        flexWrap: "wrap",
        height: "100%",
      }}
    >
      <Circle radius={300} startDegree={10}>
        <h2>I'm bigger</h2>
      </Circle>
      <Circle startDegree={10}>
        <h3>I only have children</h3>
      </Circle>
      <Circle radius={100} startDegree={10}>
        <h4>I'm smaller</h4>
      </Circle>
      <Circle startDegree={10}>
        <Circle radius={100} startDegree={40}>
          <h4>I'm inside</h4>
        </Circle>
      </Circle>
      <Circle startDegree={10} speed={14}>
        <h3>Gotta go fast</h3>
      </Circle>
      <Circle startDegree={10} speed={2}>
        <h3>Turtles are cool tho!</h3>
      </Circle>
      <Circle speed={2} startDegree={120}>
        <h3>I started with offset</h3>
      </Circle>
      <Circle endDegree={60}>
        <h3>I'm stuck!</h3>
      </Circle>
      <Circle stroke={10}>
        <h3>I'm wider!</h3>
      </Circle>
      <Circle stroke={10} color={"#620d7e"}>
        <h3 style={{ textAlign: "center" }}>I can be your favorite color</h3>
      </Circle>
      <Circle stroke={10} color={"#620d7e"} backgroundColor="#00b982">
        <h3 style={{ textAlign: "center", color: "white" }}>
          I can change my background
        </h3>
      </Circle>
      <Circle clockwise={false}>
        <h3 style={{ textAlign: "center" }}>I'm going counter clockwise</h3>
      </Circle>
      <Circle rotate={90}>
        <h3 style={{ textAlign: "center" }}>I'm starting from the center</h3>
      </Circle>
      <Circle
        radius={300}
        startDegree={30}
        rotate={90}
        speed={3}
        color={"#620d7e"}
        backgroundColor="#00b982"
        stroke={10}
      >
        <Circle
          radius={250}
          stroke={10}
          color={"black"}
          speed={6}
          backgroundColor="#620d7e"
          clockwise={false}
        >
          <h3 style={{ textAlign: "center", color: "white" }}>
            I can be all of that at the same time!
          </h3>
        </Circle>
      </Circle>
    </div>
  </ScrollWatcher>
  // </React.StrictMode>
  //         <React.StrictMode>
);
