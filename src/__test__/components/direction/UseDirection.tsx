import React from "react";
import useDirection from "../../../lib/hooks/useDirection";

const UseDirection = () => {
  const direction = useDirection();
  return <div>{direction}</div>;
};

export default UseDirection;
