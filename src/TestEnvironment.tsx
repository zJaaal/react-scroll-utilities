import React, { CSSProperties, useRef } from "react";
import { Circle, useDynamicColor, useLinearValue } from "./lib";
import { LinearValueOptions } from "./lib/types";

const TestEnvironment = () => {
  const ref = useRef(null);

  const options: LinearValueOptions = {
    anchor: "middle",
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
    endValue: 10,
    elementRef: ref,
    options,
  });
  const width = useLinearValue({
    startValue: 100,
    endValue: 10,
    elementRef: ref,
    options,
  });
  const deg = useLinearValue({
    startValue: 90,
    endValue: 0,
    elementRef: ref,
    options,
  });

  let styles: CSSProperties = {
    height,
    width,
    backgroundColor: color,
    color: "black",
    transform: `rotate(${deg}deg)`,
    borderRadius: "10px",
  };

  return (
    <div>
      <div
        style={{
          height: "4000px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div
          ref={ref}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div style={styles}></div>
          <div style={styles}></div>
          <div style={styles}></div>
        </div>
      </div>
    </div>
  );
};

export default TestEnvironment;
