import React, { useContext, useEffect, useState } from "react";
import ScrollContext from "../context/ScrollContext";
import { Directions } from "../types";
import validateScrollValue from "../../utils/validateScrollValue";

const useDirection = () => {
  const scrollState = useContext(ScrollContext);
  const [direction, setDirection] = useState(Directions.down);
  const [lastPosition, setLastPosition] = useState(0);

  useEffect(() => validateScrollValue(scrollState), []);

  useEffect(() => {
    if (typeof scrollState == "undefined") return;

    if (lastPosition > scrollState) {
      setDirection(Directions.up);
    } else {
      setDirection(Directions.down);
    }

    setLastPosition(scrollState < 0 ? 0 : scrollState);
  }, [scrollState]);

  return direction;
};

export default useDirection;
