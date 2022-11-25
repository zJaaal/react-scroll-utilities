import React, { useRef } from "react";
import { Circle, useDynamicColor, useLinearValue } from "./lib";
import { LinearValueOptions } from "./lib/types";

const TestEnvironment = () => {
  const ref = useRef(null);

  const options: LinearValueOptions = {
    anchor: "bottom",
    delay: 0,
    duration: 100,
  };

  const color = useDynamicColor({
    startColor: [67, 206, 162],
    endColor: [24, 90, 157],
    elementRef: ref,
    options,
  });

  const height = useLinearValue({
    startValue: 100,
    endValue: 500,
    elementRef: ref,
    options,
  });
  const width = useLinearValue({
    startValue: 100,
    endValue: 500,
    elementRef: ref,
    options,
  });
  const deg = useLinearValue({
    startValue: 0,
    endValue: 90,
    elementRef: ref,
    options,
  });

  return (
    <div>
      <div
        style={{
          height: 4000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height,
            width,
            backgroundColor: color,
            color: "black",
            transform: `rotate(${deg}deg)`,
            borderRadius: "10px",
          }}
          ref={ref}
        ></div>
      </div>
      <div style={{ height: 400 }}>
        <Circle radius="40vh" stroke={2}></Circle>
      </div>
    </div>
  );
};

export default TestEnvironment;
