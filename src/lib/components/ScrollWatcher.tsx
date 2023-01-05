import React, { FC, useEffect, useState } from "react";
import ScrollWatcherContext from "../context/ScrollWatcherContext";
import { Coors } from "../types";
import getCoors from "../utils/calculations/proximity/getCoors";

const ScrollWatcher: FC<any> = ({ children }) => {
  const initialState: Coors = getCoors();

  const [position, setPosition] = useState(initialState);

  const handlePosition = (event: Event) => {
    setPosition(getCoors());
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePosition);

    //To eliminate jitter on chrome
    window.addEventListener("wheel", () => {});

    return () => {
      window.removeEventListener("scroll", handlePosition);
    };
  }, []);

  return <ScrollWatcherContext.Provider value={position}>{children}</ScrollWatcherContext.Provider>;
};

export default ScrollWatcher;
