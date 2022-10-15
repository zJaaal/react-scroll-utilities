import React, { FC, useEffect, useState } from "react";
import ScrollContext from "../context/ScrollContext";

const ScrollWatcher: FC<any> = ({ children }) => {
  const [position, setPosition] = useState(
    typeof window.scrollY == "undefined"
      ? document.documentElement.scrollTop
      : window.scrollY
  );

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

  return (
    <ScrollContext.Provider value={position}>{children}</ScrollContext.Provider>
  );
};

export default ScrollWatcher;
