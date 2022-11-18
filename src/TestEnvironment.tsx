import React, { useRef } from "react";
import { useDynamicColor, useLinearValue } from "./lib";

const TestEnvironment = () => {
  const ref = useRef(null);
  const height = useLinearValue(300, 500, ref);
  const width = useLinearValue(100, 600, ref);
  const deg = useLinearValue(0, 360, ref);

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
            backgroundColor: "skyblue",
            color: "black",
            transform: `rotate(${deg}deg)`,
          }}
          ref={ref}
        >
          TestEnvironment2
        </div>
      </div>
      <div style={{ height: 400 }}>TestEnvironment2</div>
    </div>
  );
};

export default TestEnvironment;
