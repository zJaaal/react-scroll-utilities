import React, { useRef } from "react";
import Render from "../../../example-components/render/Render";
import { Circle, Rectangle, useProximity } from "../../../lib";
import "./Proximity.styles.css";

const Proximity = () => {
  const circleOneRef = useRef(null);
  const circleTwoRef = useRef(null);

  const { y: oneY } = useProximity(circleOneRef);
  const { y: twoY } = useProximity(circleTwoRef);

  return (
    <div
      style={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "black",
        paddingTop: "30px",
      }}
    >
      <Rectangle
        backgroundColor="black"
        color="white"
        stroke={5}
        width={window.innerWidth / 2}
        height={100}
        speed={1.2}
      >
        <h1 style={{ color: "#49BEAA", fontSize: "40px" }}>useProximity</h1>
      </Rectangle>
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
              These cool animations were made with{" "}
              <span style={{ color: "#49BEAA", fontWeight: 700 }}>
                useProximity
              </span>{" "}
              custom hook
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
          ref={circleOneRef}
        >
          <Circle
            color="white"
            backgroundColor="black"
            speed={1}
            clockwise={false}
            rotate={-60}
            radius={400}
            startDegree={0}
            endDegree={120}
            stroke={5}
          >
            <p
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              I'm
              <span style={{ color: oneY > 0 ? "blue" : "red" }}> {oneY} </span>
              pixels away from the center in Y axis
            </p>
          </Circle>
        </div>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div style={{ width: "50%" }}></div>
          <Render
            style={{
              height: "3rem",
              width: "40%",
              zIndex: 10,
            }}
          >
            <p
              style={{
                color: "white",
                display: "inline-block",
                textAlign: "center",
                paddingRight: 30,
                fontSize: "1.3rem",
              }}
              className="right"
            >
              <span style={{ color: "#49BEAA", fontWeight: 700 }}>
                useProximity
              </span>{" "}
              onSight property, returns if a component is inside of the viewport
            </p>
          </Render>
        </div>
        <div
          ref={circleTwoRef}
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingLeft: 30,
          }}
        >
          <Circle
            color="white"
            backgroundColor="black"
            speed={1}
            rotate={45}
            radius={400}
            startDegree={0}
            endDegree={140}
            stroke={5}
          >
            <p
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              I'm
              <span style={{ color: twoY > 0 ? "blue" : "red" }}> {twoY} </span>
              pixels away from the center in Y axis
            </p>
          </Circle>
        </div>
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
              height: "100%",
              width: "40%",
              zIndex: 10,
            }}
          >
            <p
              style={{
                color: "white",
                display: "inline-block",
                textAlign: "center",
                paddingLeft: 30,
                paddingBottom: 30,
                fontSize: "1.3rem",
              }}
              className="left"
            >
              <span style={{ color: "#49BEAA", fontWeight: 700 }}>
                useProximity
              </span>{" "}
              also returns the proximity of the component to the center of the
              screen, for both axis Y and X
            </p>
          </Render>
          <div style={{ width: "50%", height: "100%" }}>
            {" "}
            <div style={{ height: "100px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proximity;
