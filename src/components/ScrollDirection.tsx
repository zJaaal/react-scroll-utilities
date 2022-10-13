import React, { FC, useEffect, useState } from "react";
import ScrollDirectionContext from "../context/ScrollDirectionContext";
import { Directions } from "../types";

const ScrollDirection: FC<any> = ({ children }) => {
  const [direction, setDirection] = useState(Directions.down);
  const [position, setPosition] = useState(
    typeof window.scrollY == "undefined"
      ? document.documentElement.scrollTop
      : window.scrollY
  );

  const [lastPosition, setLastPosition] = useState(0);

  const handlePosition = () =>
    setPosition(
      typeof window.scrollY == "undefined"
        ? document.documentElement.scrollTop
        : window.scrollY
    );

  useEffect(() => {
    window.addEventListener("scroll", handlePosition);
    document.body.addEventListener("touchmove", handlePosition);

    return () => {
      window.removeEventListener("scroll", handlePosition);
      document.body.removeEventListener("touchmove", handlePosition);
    };
  }, []);

  useEffect(() => {
    if (lastPosition > position) {
      setDirection(Directions.up);
      setLastPosition(position < 0 ? 0 : position);
    } else {
      setDirection(Directions.down);
      setLastPosition(position < 0 ? 0 : position);
    }
  }, [position]);

  return (
    <ScrollDirectionContext.Provider value={direction}>
      {children}
    </ScrollDirectionContext.Provider>
  );
};

export default ScrollDirection;
