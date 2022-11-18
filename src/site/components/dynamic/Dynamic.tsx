import React, { useRef } from "react";
import { Rectangle, useDynamicColor } from "../../../lib";

const Dynamic = () => {
  const ref = useRef(null);
  const exampleRef = useRef(null);

  const backgroundColor = useDynamicColor({
    startColor: [255, 255, 255],
    endColor: [159, 212, 163],
    elementRef: ref,
    anchor: "bottom",
  });
  const color = useDynamicColor({
    startColor: [159, 212, 163],
    endColor: [255, 255, 255],
    elementRef: ref,
    anchor: "bottom",
  });

  const exampleColor = useDynamicColor({
    startColor: [239, 112, 155],
    endColor: [16, 55, 131],
    elementRef: exampleRef,
    anchor: "bottom",
  });
  return (
    <div
      style={{
        height: "100%",
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
      >
        <h1 style={{ color: color, fontSize: "40px" }}>useDynamicColor</h1>
      </Rectangle>
      <h2 style={{ marginTop: "20px", color, width: "50%" }}>
        Basically, this hook creates an animation of colors that goes from an{" "}
        <span style={{ color: "#ef709b" }}>start color</span> to an{" "}
        <span style={{ color: "#103783" }}>end color.</span>
      </h2>
      <h2
        style={{ marginTop: "40px", color: exampleColor, width: "50%" }}
        ref={exampleRef}
      >
        You've been seeing examples of this through all the demo. I love this
        hook to be honest.
      </h2>
      <h2
        style={{ marginTop: "40px", color: exampleColor, width: "50%" }}
        ref={exampleRef}
      >
        PD: Just need this space for you to appreciate the animation. ;)
      </h2>
    </div>
  );
};

export default Dynamic;
