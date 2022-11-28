import React, { useRef } from "react";
import { Circle, useDynamicColor, useLinearValue } from "./lib";
import { LinearValueOptions } from "./lib/types";

const TestEnvironment = () => {
  const ref = useRef(null);
  const delayRef1 = useRef(null);
  const delayRef2 = useRef(null);
  const delayRef3 = useRef(null);

  const options: LinearValueOptions = {
    anchor: "middle",
    delay: 0,
    duration: 100,
  };

  const optionsDelay1: LinearValueOptions = {
    anchor: "middle",
    delay: 0,
    duration: 50,
  };
  const optionsDelay2: LinearValueOptions = {
    anchor: "middle",
    delay: 0,
    duration: 60,
  };
  const optionsDelay3: LinearValueOptions = {
    anchor: "middle",
    delay: 0,
    duration: 70,
  };

  const color = useDynamicColor({
    startColor: [67, 206, 162],
    endColor: [24, 90, 157],
    elementRef: ref,
    options,
  });

  const height = useLinearValue({
    startValue: 10,
    endValue: 100,
    elementRef: ref,
    options,
  });
  const width = useLinearValue({
    startValue: 10,
    endValue: 100,
    elementRef: ref,
    options,
  });
  const deg = useLinearValue({
    startValue: 0,
    endValue: 90,
    elementRef: ref,
    options,
  });
  const delayColor1 = useDynamicColor({
    startColor: [67, 206, 162],
    endColor: [24, 90, 157],
    elementRef: delayRef1,
    options: optionsDelay1,
  });

  const delayHeight1 = useLinearValue({
    startValue: 10,
    endValue: 100,
    elementRef: delayRef1,
    options: optionsDelay1,
  });
  const delayWidth1 = useLinearValue({
    startValue: 10,
    endValue: 100,
    elementRef: delayRef1,
    options: optionsDelay1,
  });
  const delayDeg1 = useLinearValue({
    startValue: 0,
    endValue: 90,
    elementRef: delayRef1,
    options: optionsDelay1,
  });
  const delayColor2 = useDynamicColor({
    startColor: [67, 206, 162],
    endColor: [24, 90, 157],
    elementRef: delayRef2,
    options: optionsDelay2,
  });

  const delayHeight2 = useLinearValue({
    startValue: 10,
    endValue: 100,
    elementRef: delayRef2,
    options: optionsDelay2,
  });
  const delayWidth2 = useLinearValue({
    startValue: 10,
    endValue: 100,
    elementRef: delayRef2,
    options: optionsDelay2,
  });
  const delayDeg2 = useLinearValue({
    startValue: 0,
    endValue: 90,
    elementRef: delayRef2,
    options: optionsDelay2,
  });
  const delayColor3 = useDynamicColor({
    startColor: [67, 206, 162],
    endColor: [24, 90, 157],
    elementRef: delayRef3,
    options: optionsDelay3,
  });

  const delayHeight3 = useLinearValue({
    startValue: 10,
    endValue: 100,
    elementRef: delayRef3,
    options: optionsDelay3,
  });
  const delayWidth3 = useLinearValue({
    startValue: 10,
    endValue: 100,
    elementRef: delayRef3,
    options: optionsDelay3,
  });
  const delayDeg3 = useLinearValue({
    startValue: 0,
    endValue: 90,
    elementRef: delayRef3,
    options: optionsDelay3,
  });

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
          <div
            style={{
              height,
              width,
              backgroundColor: color,
              color: "black",
              transform: `rotate(${deg}deg)`,
              borderRadius: "10px",
            }}
          ></div>
          <div
            style={{
              height,
              width,
              backgroundColor: color,
              color: "black",
              transform: `rotate(${deg}deg)`,
              borderRadius: "10px",
            }}
          ></div>
          <div
            style={{
              height,
              width,
              backgroundColor: color,
              color: "black",
              transform: `rotate(${deg}deg)`,
              borderRadius: "10px",
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              height: delayHeight1,
              width: delayWidth1,
              backgroundColor: delayColor1,
              color: "black",
              transform: `rotate(${delayDeg1}deg)`,
              borderRadius: "10px",
            }}
            ref={delayRef1}
          ></div>
          <div
            style={{
              height: delayHeight2,
              width: delayWidth2,
              backgroundColor: delayColor2,
              color: "black",
              transform: `rotate(${delayDeg2}deg)`,
              borderRadius: "10px",
            }}
            ref={delayRef2}
          ></div>
          <div
            style={{
              height: delayHeight3,
              width: delayWidth3,
              backgroundColor: delayColor3,
              color: "black",
              transform: `rotate(${delayDeg3}deg)`,
              borderRadius: "10px",
            }}
            ref={delayRef3}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TestEnvironment;
