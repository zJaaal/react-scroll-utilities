import React, { useRef } from "react";
import useProximity from "../../hooks/useProximity";

const UseProximity = () => {
  const ref = useRef<HTMLDivElement>(null);

  const proximity = useProximity(ref);

  return <div ref={ref}>{proximity}</div>;
};

export default UseProximity;
