import React, { useRef } from "react";
import { useDynamicColor, useProximity } from "../../../../lib";
import "./Title.styles.css";
const Title = () => {
  const ref = useRef(null);
  const title = "WELCOME TO".split("");
  const color = useDynamicColor({
    startColor: [0, 0, 0],
    endColor: [255, 255, 255],
    elementRef: ref,
    anchor: "top",
  });
  const backgroundColor = useDynamicColor({
    startColor: [255, 255, 255],
    endColor: [0, 0, 0],
    elementRef: ref,
    anchor: "top",
  });
  const words = [
    "REACT ".split(""),
    "SCROLL ".split(""),
    "UTILITIES".split(""),
  ];

  return (
    <div className="title" ref={ref} style={{ color, backgroundColor }}>
      <h1>
        {title.map((char, i) => (
          <span key={i} className={char.trim().length ? `char-${i} char` : ""}>
            {char}
          </span>
        ))}
      </h1>
      <h1>
        {words.map((word, i) =>
          word.map((char, j) => (
            <span
              key={j}
              className={char.trim().length ? `char-${j} char` : ""}
            >
              {char}
            </span>
          ))
        )}
      </h1>
    </div>
  );
};

export default Title;
