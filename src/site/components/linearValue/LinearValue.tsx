import React, { useRef } from "react";
import {
  Rectangle,
  useDirection,
  useDynamicColor,
  useLinearValue,
} from "../../../lib";

const LinearValue = () => {
  const ref = useRef(null);
  const translateRef = useRef(null);

  const backgroundColor = useDynamicColor({
    startColor: [159, 212, 163],
    endColor: [0, 0, 0],
    elementRef: ref,
    options: { anchor: "bottom", duration: 70 },
  });
  const color = useDynamicColor({
    startColor: [0, 0, 0],
    endColor: [159, 212, 163],
    elementRef: ref,
    options: { anchor: "bottom", duration: 70 },
  });
  const sqauresBackgroundColor = useDynamicColor({
    startColor: [159, 212, 163],
    endColor: [177, 21, 224],
    elementRef: ref,
    options: { anchor: "middle" },
  });

  const value = useLinearValue({
    startValue: 0,
    endValue: 90,
    elementRef: ref,
    options: { anchor: "bottom", duration: 80 },
  });
  const translateValue = useLinearValue({
    startValue: 0,
    endValue: window.innerWidth - 100,
    elementRef: translateRef,
  });

  const direction = useDirection();
  return (
    <div
      style={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "stretch",
        backgroundColor,
        paddingTop: "30px",
      }}
      ref={ref}
    >
      <Rectangle
        backgroundColor={backgroundColor}
        color={color}
        stroke={5}
        width="60vw"
        height={100 + "px"}
      >
        <h1 style={{ color }} className="long-section-title">
          useLinearValue
        </h1>
      </Rectangle>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="explanation"
      >
        <h2 style={{ marginTop: "30px", color }}>
          This hook calculates a value using the scroll position as reference,
          you just only need to use two values as start and end values and a
          reference to an HTML Element.
        </h2>
        <h2 style={{ marginTop: "20px", color }}>
          Just with that you can create things like those squares:
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100vw",
            height: "200px",
            marginTop: "100px",
          }}
        >
          <div
            style={{
              marginTop: "40px",
              backgroundColor: sqauresBackgroundColor,
              transform: `rotate(-${value}deg)`,
              width: "90px",
              height: "90px",
            }}
          ></div>
          <div
            style={{
              marginTop: "40px",
              backgroundColor: sqauresBackgroundColor,
              width: value,
              height: value,
            }}
          ></div>
          <div
            style={{
              marginTop: "40px",
              backgroundColor: sqauresBackgroundColor,
              transform: `rotate(${value}deg)`,
              width: "90px",
              height: "90px",
            }}
          ></div>
        </div>
        <h2 style={{ marginTop: "30px", color, textAlign: "center" }}>
          Or maybe this arrows that are also reacting to the direction:
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "100vw",
            height: "400px",
            marginTop: "100px",
            marginLeft: "30px",
            marginBottom: "30px",
          }}
          ref={translateRef}
        >
          <img
            src="arrow.png"
            className={"arrow-right"}
            style={{
              transform: `translateX(${
                direction == "UP" ? translateValue - 100 : translateValue + 100
              }px) rotate(${direction == "UP" ? 90 : -90}deg)`,
            }}
          />
          <img
            src="arrow.png"
            className={"arrow-right"}
            style={{
              transform: `translateX(${translateValue}px) rotate(${
                direction == "UP" ? 90 : -90
              }deg)`,
            }}
          />
          <img
            src="arrow.png"
            className={"arrow-right"}
            style={{
              transform: `translateX(${
                direction == "UP" ? translateValue + 100 : translateValue - 100
              }px) rotate(${direction == "UP" ? 90 : -90}deg)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LinearValue;
