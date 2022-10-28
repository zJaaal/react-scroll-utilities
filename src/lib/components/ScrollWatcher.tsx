import React, { FC, useEffect, useState } from "react";
import ScrollContext from "../context/ScrollContext";
import { Coors } from "../types";
import getCoors from "../utils/calculations/getCoors";

const ScrollWatcher: FC<any> = ({ children }) => {
  const initialState: Coors = getCoors();

  const [position, setPosition] = useState(initialState);

  const handlePosition = (event: Event) => {
    event.preventDefault();
    setPosition(getCoors());
  };
  const handlePositionMobile = (event: Event) => {
    setPosition(getCoors());
  };

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      window.addEventListener("touchmove", handlePositionMobile, false);
    } else window.addEventListener("scroll", handlePosition, false);

    return () => {
      window.removeEventListener("scroll", handlePosition);
      window.removeEventListener("touchmove", handlePositionMobile);
    };
  }, []);

  return (
    <ScrollContext.Provider value={position}>{children}</ScrollContext.Provider>
  );
};

export default ScrollWatcher;
