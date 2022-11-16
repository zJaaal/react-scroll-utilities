import React, { useRef } from "react";
import { Rectangle, useDirection, useDynamicColor } from "../../../lib";

import "./Direction.styles.css";

const Direction = () => {
  const ref = useRef(null);

  const direction = useDirection();

  const backgroundColor = useDynamicColor({
    startColor: [0, 0, 0],
    endColor: [255, 255, 255],
    elementRef: ref,
  });
  const color = useDynamicColor({
    startColor: [255, 255, 255],
    endColor: [0, 0, 0],
    elementRef: ref,
  });
  return (
    <div
      style={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor,
        paddingTop: "30px",
      }}
      ref={ref}
    >
      <Rectangle
        backgroundColor={backgroundColor}
        color={color}
        stroke={5}
        width={window.innerWidth / 2}
        height={100}
        speed={1.2}
      >
        <h1 style={{ color: "#e71d36", fontSize: "40px" }}>useDirection</h1>
      </Rectangle>

      <h2 style={{ marginTop: "20px", color }}>
        These arrows react to the scroll direction
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          paddingTop: 50,
        }}
      >
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          paddingTop: 50,
        }}
      >
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          paddingTop: 50,
        }}
      >
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          paddingTop: 50,
        }}
      >
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          paddingTop: 50,
        }}
      >
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
        <div
          style={{
            width: "50%",
            position: "static",
            top: "10px",
            left: "10px",
          }}
        >
          <h2 style={{ color, textAlign: "center" }}>
            Scroll to the opposite!
          </h2>
        </div>
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          paddingTop: 50,
        }}
      >
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          paddingTop: 50,
        }}
      >
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />

        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          paddingTop: 50,
        }}
      >
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          paddingTop: 50,
        }}
      >
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          paddingTop: 50,
        }}
      >
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          paddingTop: 50,
        }}
      >
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
        <div
          style={{
            width: "50%",
            position: "static",
            top: "10px",
            left: "10px",
          }}
        >
          <h2 style={{ color, textAlign: "center" }}>Pretty cool right!</h2>
        </div>
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          paddingTop: 50,
        }}
      >
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          paddingTop: 50,
        }}
      >
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
        <img
          src="../../../assets/arrow.png"
          className={direction == "UP" ? "arrow reverse" : "arrow"}
        />
      </div>
    </div>
  );
};

export default Direction;
