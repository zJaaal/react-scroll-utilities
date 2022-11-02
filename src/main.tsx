import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Render from "./lib/components/render/Render";
import ScrollWatcher from "./lib/components/ScrollWatcher";
import "./index.css";
import Rectangle from "./lib/components/rectangle/Rectangle";
import Circle from "./lib/components/circle/Circle";
import DynamicBackground from "./lib/components/dynamicBackground/DynamicBackground";
import IconTest from "./IconTest";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ScrollWatcher>
    <h1>Scroll!</h1>
    <div style={{ height: "2000px" }}></div>
    <App />
    <DynamicBackground startColor={[48, 242, 242]} endColor={[106, 46, 53]}>
      <Render
        style={{
          transform: "translate(0, 1000px)",
          height: "100px",
        }}
        dynamicBackground={true}
      >
        <h3>I'm Render Component using this beautiful background</h3>
      </Render>
      <Circle
        radius={600}
        stroke={10}
        color={"#620d7e"}
        dynamicBackground={true}
      >
        <h3 style={{ textAlign: "center", color: "white" }}>
          I can change my background
        </h3>
      </Circle>
      <Rectangle stroke={10} color={"#620d7e"} dynamicBackground={true}>
        <h3 style={{ textAlign: "center", color: "white" }}>
          I can change my background
        </h3>
      </Rectangle>
      <IconTest />
    </DynamicBackground>
    <div style={{ height: "2000px" }}></div>
    {/* <div
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
        <h3>I'm strong!</h3>
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
      <Rectangle width={300} height={300} startDegree={10}>
        <h2>I'm bigger</h2>
      </Rectangle>
      <Rectangle startDegree={10}>
        <h3>I only have children</h3>
      </Rectangle>
      <Rectangle width={100} height={100} startDegree={10}>
        <h4>I'm smaller</h4>
      </Rectangle>
      <Rectangle width={100} height={400} startDegree={10}>
        <h4>I'm taller</h4>
      </Rectangle>
      <Rectangle width={400} height={100} startDegree={10}>
        <h4>I'm wider</h4>
      </Rectangle>
      <Rectangle startDegree={10}>
        <Rectangle width={100} height={100} startDegree={40}>
          <h4>I'm inside</h4>
        </Rectangle>
      </Rectangle>
      <Rectangle startDegree={10} speed={14}>
        <h3>Gotta go fast</h3>
      </Rectangle>
      <Rectangle startDegree={10} speed={2}>
        <h3>Turtles are cool tho!</h3>
      </Rectangle>
      <Rectangle speed={2} startDegree={120}>
        <h3>I started with offset</h3>
      </Rectangle>
      <Rectangle endDegree={60}>
        <h3>I'm stuck!</h3>
      </Rectangle>
      <Rectangle stroke={10}>
        <h3>I'm strong!</h3>
      </Rectangle>
      <Rectangle stroke={10} color={"#620d7e"}>
        <h3 style={{ textAlign: "center" }}>I can be your favorite color</h3>
      </Rectangle>
      <Rectangle stroke={10} color={"#620d7e"} backgroundColor="#00b982">
        <h3 style={{ textAlign: "center", color: "white" }}>
          I can change my background
        </h3>
      </Rectangle>
      <Rectangle clockwise={false}>
        <h3 style={{ textAlign: "center" }}>I'm going counter clockwise</h3>
      </Rectangle>
      <Rectangle rotate={90}>
        <h3 style={{ textAlign: "center" }}>I'm starting from the center</h3>
      </Rectangle>
      <Rectangle
        width={300}
        height={300}
        startDegree={30}
        rotate={90}
        speed={3}
        color={"#620d7e"}
        backgroundColor="#00b982"
        stroke={10}
      >
        <Rectangle
          width={250}
          height={250}
          stroke={10}
          color={"black"}
          speed={6}
          backgroundColor="#620d7e"
          clockwise={false}
        >
          <h3 style={{ textAlign: "center", color: "white" }}>
            I can be all of that at the same time!
          </h3>
        </Rectangle>
      </Rectangle>
    </div> */}
  </ScrollWatcher>
  // </React.StrictMode>
  //         <React.StrictMode>
);
