import React, { useRef } from "react";
import { Circle, useDynamicColor, useLinearValue } from "./lib";

const TestEnvironment = () => {
  const ref = useRef(null);
  // const height = useLinearValue({
  //   startValue: 300,
  //   endValue: 500,
  //   elementRef: ref,
  // });
  const width = useLinearValue({
    startValue: 100,
    endValue: 500,
    elementRef: ref,
  });
  const deg = useLinearValue({
    startValue: 0,
    endValue: 90,
    elementRef: ref,
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
            height: "200px",
            width,
            backgroundColor: "skyblue",
            color: "black",
            transform: `rotate(${deg}deg)`,
          }}
          ref={ref}
        >
          TestEnvironment2
        </div>
      </div>
      <div style={{ height: 400 }}>
        <Circle radius="40vh" stroke={2}></Circle>
      </div>
    </div>
  );
};

export default TestEnvironment;
