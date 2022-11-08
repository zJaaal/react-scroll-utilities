import React, { useRef } from "react";
import { useProximity } from "../../lib";

const UseProximityOnSight = () => {
  const ref = useRef(null);
  const { onSight } = useProximity(ref);

  return <div ref={ref}>{onSight.toString()}</div>;
};

export default UseProximityOnSight;
