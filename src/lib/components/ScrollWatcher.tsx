import React, { FC, useEffect, useState } from "react";
import ScrollContext from "../context/ScrollContext";
import { Coors } from "../types";
import getCoors from "../utils/getCoors";

const ScrollWatcher: FC<any> = ({ children }) => {
  const initialState: Coors = getCoors();

  const [position, setPosition] = useState(initialState);

  const handlePosition = (e: Event) => {
    e.preventDefault();
    setPosition(getCoors());
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePosition);
    document.body.addEventListener("touchmove", handlePosition);

    return () => {
      window.removeEventListener("scroll", handlePosition);
      document.body.removeEventListener("touchmove", handlePosition);
    };
  }, []);

  return (
    <ScrollContext.Provider value={position}>{children}</ScrollContext.Provider>
  );
};

export default ScrollWatcher;
