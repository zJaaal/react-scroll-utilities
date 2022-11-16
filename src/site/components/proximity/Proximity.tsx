import React, { useRef } from "react";
import Render from "../../../example-components/render/Render";
import { Circle, useDynamicColor } from "../../../lib";
import "./Proximity.styles.css";

const Proximity = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <h1 style={{ color: "white", marginTop: "40px", fontSize: "40px" }}>
        useProximity
      </h1>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Render
            style={{
              paddingTop: "50px",
              height: "3rem",
              width: "50%",
              zIndex: 10,
            }}
          >
            <p
              style={{
                color: "white",
                display: "inline-block",
                textAlign: "center",
                padding: 30,
                fontSize: "1.3rem",
              }}
              className="left"
            >
              These cool animations was made with useProximity custom hook
            </p>
          </Render>
          <div style={{ width: "50%", height: "100%" }}></div>
        </div>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Circle
            color="white"
            backgroundColor="black"
            speed={1.3}
            clockwise={false}
            rotate={-60}
            radius={400}
            startDegree={0}
            endDegree={120}
            stroke={5}
          />
        </div>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div style={{ width: "50%", marginBottom: 60 }}>
            <div style={{ height: "50px" }}></div>
          </div>
          <Render
            style={{
              height: "3rem",
              width: "40%",
              zIndex: 10,
              paddingBottom: 10,
            }}
          >
            <p
              style={{
                color: "white",
                display: "inline-block",
                textAlign: "center",

                fontSize: "1.3rem",
              }}
              className="right"
            >
              useProximity onSight property, lets you know if a component is on
              sight
            </p>
          </Render>
        </div>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Circle
            color="white"
            backgroundColor="black"
            speed={1.3}
            rotate={60}
            radius={400}
            startDegree={0}
            endDegree={120}
            stroke={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Proximity;
