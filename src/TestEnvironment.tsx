import React, { CSSProperties, useRef } from "react";
import { Circle, useDirection, useDynamicColor, useLinearValue, useProximity } from "./lib";
import useScrollWatcher from "./lib/hooks/useScrollWatcher";
import { LinearValueOptions } from "./lib/types";

const TestEnvironment = () => {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const context = useScrollWatcher(scrollRef);

  const options: LinearValueOptions = {
    anchor: "middle",
    delay: 0,
    duration: 100,
    context,
  };

  const direction = useDirection(context);

  const proximity = useProximity(ref, context);

  console.log(direction, proximity);

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
    transform: `rotate(${deg}deg)`,
    color: "black",
    borderRadius: "10px",
  };

  return (
    <div
      style={{
        height: 4000,
      }}
    >
      <div
        style={{
          height: "50vh",
          width: "100%",
          overflow: "scroll",
        }}
        ref={scrollRef}
      >
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
    </div>
  );
};

export default TestEnvironment;
