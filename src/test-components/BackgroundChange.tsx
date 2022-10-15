import React, { FC, useEffect, useRef, useState } from "react";
import useDirection from "../lib/hooks/useDirection";
import useProximity from "../lib/hooks/useProximity";
import { Directions } from "../lib/types";

const steps = 1;

const BackgroundChange: FC<any> = ({ children }) => {
  const [colors, setColors] = useState({
    red: 123,
    blue: 234,
    green: 213,
  });
  const { red, blue, green } = colors;

  const [backgroundColors, setBackgroundColors] = useState({
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  });

  const direction = useDirection();

  const ref = useRef<HTMLDivElement>(null);
  const proximity = useProximity(ref);

  useEffect(() => {
    switch (direction) {
      case Directions.up: {
        setColors(({ red, green, blue }) => ({
          red: red + steps,
          green: green + steps,
          blue: blue + steps,
        }));
        break;
      }
      case Directions.down: {
        setColors(({ red, green, blue }) => ({
          red: red - steps,
          green: green - steps,
          blue: blue - steps,
        }));
        break;
      }
    }
  }, [direction, proximity]);

  useEffect(
    () =>
      setBackgroundColors({
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      }),
    [colors]
  );

  return (
    <div style={{ ...backgroundColors, height: "inherit" }} ref={ref}>
      <h1>This background react to the direction of your scroll!</h1>
      {children}
    </div>
  );
};

export default BackgroundChange;
