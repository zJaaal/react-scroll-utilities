import React, { useRef } from "react";
import { useScrollWatcher } from "../../../lib";

const UseScrollWatcher = () => {
  const scrollRef = useRef(null);

  const { position, element } = useScrollWatcher(scrollRef);
  return (
    <div
      style={{
        height: "60vh",
        width: "100%",
        overflow: "scroll",
        // backgroundColor: colorBG,
      }}
      ref={scrollRef}
      data-testid="scroll"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "900px",
          width: "4000px",
        }}
      >
        <div data-testid="x">{"X: " + position.x}</div>
        <div data-testid="y">{"Y: " + position.y}</div>
        <div data-testid="element">{"Element: " + element}</div>
      </div>
    </div>
  );
};

export default UseScrollWatcher;
